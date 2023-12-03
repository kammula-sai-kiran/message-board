import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessages } from "../../redux/apis";
import { setSelectedMessageIds } from "../../redux/reducers";
import "./MessageCard.scss";

const MessageCard = (props) => {
  const selectedMessageIds = useSelector((s) => s?.messageBoard?.selectedMessageIds)
  const dispatch = useDispatch();
  const {
    id,
    text,
    source,
    timestamp,
  } = props;
  const date = new Date(timestamp);
  const onDeleteClick = () => {
    dispatch(deleteMessages([id]));
  };
  const onCheckBoxClick = () => {
    const newSelectedMessageIds = selectedMessageIds?.includes(id)
      ? selectedMessageIds?.filter((msgId) => msgId !== id)
      : [...selectedMessageIds, id];
    dispatch(setSelectedMessageIds(newSelectedMessageIds));
  };

  return (
    <div className="message">
      <input type="checkbox" onClick={onCheckBoxClick}></input>
      <div className="message-data">
        <div className="message-metadata">
          <div>{source}</div>
          <div>{date.toLocaleString()}</div>
          <button onClick={onDeleteClick}>delete</button>
        </div>
        <div className="message-text">{text}</div>
      </div>
    </div>
  );
};

export default MessageCard;
