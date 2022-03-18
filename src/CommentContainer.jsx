import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Comments from "./Comments";

const CommentContainer = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currComment, setCurrComment] = useState(comment);
  return (
    <div>
      <Comment
        key={comment.id}
        comment={currComment}
        onCurrCommentChange={setCurrComment}
        onPlusClick={setIsOpen}
        isOpen={isOpen}
      />
      <div>{isOpen ? <Comments comments={currComment.replies} /> : null}</div>
    </div>
  );
};

export default CommentContainer;
