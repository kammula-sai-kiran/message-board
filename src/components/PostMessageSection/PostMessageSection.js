import React, { useState } from "react";
import "./PostMessageSection.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessages, postMessage } from "../../redux/apis";
import { setSelectedMessageIds } from "../../redux/reducers";

const PostMessageSection = () => {
  const dispatch = useDispatch();
  const selectedMessageIds = useSelector(
    (s) => s?.messageBoard?.selectedMessageIds
  );
  const [textMessage, setTextMessage] = useState("");
  const handleTextChange = (event) => {
    setTextMessage(event.target.value);
  };
  const handlePostClick = () => {
    dispatch(postMessage(textMessage));
    setTextMessage("");
  };
  const handleDeleteSelectedClick = () => {
    dispatch(deleteMessages(selectedMessageIds));
  };
  return (
    <div className="post-message-section">
      <h3>Type Something and hit 'post' to post a message</h3>
      <div className="body">
        <input value={textMessage} onChange={handleTextChange}></input>
        <button onClick={handlePostClick}>post</button>
        <button>delete all</button>
        {selectedMessageIds?.length ? (
          <button onClick={handleDeleteSelectedClick}>
            delete selected messages
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PostMessageSection;
