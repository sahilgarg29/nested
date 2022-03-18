import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentContainer from "./CommentContainer";

const Comments = ({ comments }) => {
  // const [isOpen, setIsOpen] = useState(false);

  if (comments) {
    return (
      <div className="comment-box">
        {comments.map((comment) => {
          return <CommentContainer key={comment.id} comment={comment} />;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Comments;
