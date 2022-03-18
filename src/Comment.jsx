import React, { useState } from "react";

const Comment = ({ comment, onPlusClick, isOpen, onCurrCommentChange }) => {
  const [showInput, setShowInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const handleReply = (e) => {
    e.preventDefault();
    onPlusClick(true);
    setShowInput(false);
    let cmnt = {
      id: Date.now(),
      author: "Sahil",
      timestamp: new Date().toLocaleString(),
      body: replyText
    };

    if (comment.replies) {
      onCurrCommentChange({
        ...comment,
        replies: [...comment.replies, cmnt]
      });
    } else {
      onCurrCommentChange({
        ...comment,
        replies: [cmnt]
      });
    }

    setReplyText("");
  };
  return (
    <div className="comment">
      <div className="author-timestamp">
        <span>{comment.author}</span> -{" "}
        <span>{new Date(comment.timestamp).toLocaleString()}</span>
      </div>

      <h3 className="comment-body">
        <span
          style={{ cursor: "pointer" }}
          className="plus-btn"
          onClick={() => onPlusClick(!isOpen)}
        >
          {comment.replies ? "+ " : null}
        </span>

        {comment.body}
      </h3>

      <div className="comment-links">
        <span
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            setShowInput(!showInput);
          }}
        >
          Reply
        </span>
        <a href="#">Give Award</a>
        <a href="#">Share</a>
        <a href="#">Report</a>
        <a href="#">Save</a>
      </div>
      {showInput ? (
        <form onSubmit={handleReply}>
          <input
            type="text"
            name="reply"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <input type="submit" value="Reply" />
        </form>
      ) : null}
    </div>
  );
};

export default Comment;
