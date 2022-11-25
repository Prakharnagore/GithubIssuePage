import React from "react";

// REACT ICONS IMPORTS
import { BiComment } from "react-icons/bi";
import { VscIssues } from "react-icons/vsc";
import { Link } from "react-router-dom";

const IssueCard = ({ props }) => {
  const { number, title, comments, labels, login, date } = props;

  return (
    <>
      <div className="issue_card">
        <div className="issue">
          <div className="issue_icon mouse_pointer">
            <Link to={`/${number}`}>
              <VscIssues className="issue_icon" />
            </Link>
          </div>
          <div className="title mouse_pointer">
            <Link to={`/${number}`}>
              <p>
                {title}
                {labels.map((label) => {
                  const { id, name, color } = label;
                  return (
                    <span
                      className={`label ${color}`}
                      key={id}
                      style={{ backgroundColor: `#${color}` }}
                    >
                      {name}
                    </span>
                  );
                })}
              </p>
              <p className="sub_title">
                #{number} opened on {date[1]} {date[2]}, {date[3]} by {login}
              </p>
            </Link>
          </div>
        </div>

        <div className="comment mouse_pointer">
          <Link to={`/${number}`}>
            <BiComment />
            <small>{comments}</small>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IssueCard;
