import React from "react";

const CommentCard = ({ props }) => {
  const { body, avatar_url, login } = props;
  return (
    <>
      <div className="comment_card">
        <div className="userimage">
          <img
            src={
              avatar_url ||
              "	https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
            }
            alt="user"
          />
        </div>
        <div className="comment">
          <p>
            {login} <span>commented</span>
          </p>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
