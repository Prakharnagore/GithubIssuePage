import React from "react";

// CSS STYLE IMPORT
import "./Issues.css";

// REACT ICONS IMPORTS
import { VscIssues } from "react-icons/vsc";
import IssueCard from "./IssueCard";

//Context Import
import { useAppContext } from "../../Context";

const Issues = () => {
  const {
    state: { allIssues, isLoading },
  } = useAppContext();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="main_container">
      <div className="issues">
        <div className="issues_header border">
          <VscIssues className="issue_icon" />
          <p>Open Issues List</p>
        </div>
        {allIssues?.map((issue) => {
          const {
            updated_at,
            id,
            number,
            title,
            comments,
            labels,
            user: { login },
          } = issue;

          const date = new Date(updated_at).toString().split(" ");

          return (
            <IssueCard
              key={id}
              props={{ number, title, comments, labels, login, date }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Issues;
