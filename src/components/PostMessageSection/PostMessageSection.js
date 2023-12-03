import React from "react";
import usePostMessageSection from "./usePostMessageSection";
import "./PostMessageSection.scss";

const PostMessageSection = ({ setShowModal }) => {
  const {
    textMessage,
    handleTextChange,
    handlePostClick,
    handleDeleteSelectedClick,
    selectedMessageIds,
  } = usePostMessageSection();

  return (
    <div className="post-message-section">
      <h3>Type something and hit 'Post' to post a message</h3>
      <div className="body">
        <input value={textMessage} onChange={handleTextChange}></input>
        <button onClick={handlePostClick}>Post</button>
        {selectedMessageIds?.length ? (
          <button onClick={() => handleDeleteSelectedClick(setShowModal)}>
            Delete selected messages
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PostMessageSection;
