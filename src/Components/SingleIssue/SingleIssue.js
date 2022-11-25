import React, { useEffect } from "react";

// CSS STYLE IMPORT
import "./SingleIssue.css";

// COMPONENT IMPORT
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../Context";

const SingleIssue = () => {
  const { issue } = useParams();

  const {
    fetchSingleIssue,
    state: {
      isLoading,
      singleIssue: [singleIssueData, singleIssueComments],
    },
  } = useAppContext();

  useEffect(() => {
    fetchSingleIssue(issue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issue]);

  if (isLoading) {
    return <div className="loading">Loading..</div>;
  }

  return (
    <>
      <div className="main_container">
        <div className="single_issue_heading">
          <p>
            {singleIssueData?.title} #{singleIssueData?.number}
          </p>
          <small>{singleIssueData?.comments} comments</small>
        </div>
        <div className="single_issue main_container">
          {singleIssueComments?.length > 0 ? (
            <div>
              {singleIssueComments?.map((comment) => {
                const {
                  id,
                  body,
                  user: { avatar_url, login },
                } = comment;
                return (
                  <CommentCard key={id} props={{ body, avatar_url, login }} />
                );
              })}
            </div>
          ) : (
            <div>
              <p>No Comment Found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleIssue;
