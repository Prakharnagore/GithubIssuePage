import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "../Reducer/index";

export let AppContext = createContext({});

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRepo = async (id) => {
    try {
      dispatch({ type: "GET_REPO_DATA_BEGIN" });
      const res = await fetch(`https://api.github.com/repos/facebook/react`);
      const data = await res.json();
      dispatch({
        type: "GET_REPO_DATA_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "GET_REPO_DATA_FAILED" });
    }
  };

  const fetchIssues = async () => {
    try {
      dispatch({ type: "GET_ISSUES_DATA_BEGIN" });
      const res = await fetch(
        `https://api.github.com/repos/facebook/react/issues?page=${state.page}`
      );
      const data = await res.json();
      dispatch({
        type: "GET_ISSUES_DATA_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "GET_ISSUES_DATA_FAILED" });
    }
  };

  const fetchSingleIssue = async (id) => {
    try {
      dispatch({ type: "GET_SINGLE_ISSUE_DATA_BEGIN" });
      const res = await Promise.all([
        fetch(`https://api.github.com/repos/facebook/react/issues/${id}`),
        fetch(
          `https://api.github.com/repos/facebook/react/issues/${id}/comments`
        ),
      ]);
      const data = await Promise.all(res.map((r) => r.json()));

      dispatch({
        type: "GET_SINGLE_ISSUE_DATA_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "GET_SINGLE_ISSUE_DATA_FAILED" });
    }
  };

  const handlePageClick = (e) => {
    const page = e.selected + 1;
    dispatch({ type: "PAGE_CHANGE", payload: page });
  };

  useEffect(() => {
    fetchIssues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.page]);

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ state, handlePageClick, fetchSingleIssue }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
