const initialState = {
  page: 1,
  repo: {},
  allIssues: [],
  singleIssue: [],
  isLoading: false,
  isError: false,
  issuePerPage: 0,
};

const reducer = (state, action) => {
  //REPO DATA
  if (action.type === "GET_REPO_DATA_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "GET_REPO_DATA_SUCCESS") {
    return {
      ...state,
      repo: action.payload,
      isLoading: false,
    };
  }
  if (action.type === "GET_REPO_DATA_FAILURE") {
    return { ...state, isLoading: false, isError: true };
  }

  // ISSUE DATA
  if (action.type === "GET_ISSUES_DATA_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "GET_ISSUES_DATA_SUCCESS") {
    return {
      ...state,
      allIssues: action.payload,
      isLoading: false,
      issuePerPage: action.payload.length,
    };
  }
  if (action.type === "GET_ISSUES_DATA_FAILURE") {
    return { ...state, isLoading: false, isError: true };
  }

  // SINGLE ISSUE DATA
  if (action.type === "GET_SINGLE_ISSUE_DATA_BEGIN") {
    return { ...state, isLoading: true };
  }
  if (action.type === "GET_SINGLE_ISSUE_DATA_SUCCESS") {
    return {
      ...state,
      singleIssue: action.payload,
      isLoading: false,
      isError: false,
    };
  }
  if (action.type === "GET_SINGLE_ISSUE_DATA_FAILURE") {
    return { ...state, isLoading: false, isError: true };
  }

  //  PAGE CHANGE
  if (action.type === "PAGE_CHANGE") {
    return { ...state, page: action.payload };
  }
  return { ...state };
};

export { reducer, initialState };
