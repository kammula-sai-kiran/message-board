import React from "react";
import { useSelector } from "react-redux";
import MessageCard from "../MessageCard/MessageCard";

import "./MessageList.scss";

const MessageList = () => {
  const allMessages = useSelector((s) => s?.messageBoard?.allMessages);
  return (
    <div className="message-list">
      {allMessages?.map((message) => (
        <MessageCard
          {...message}
          key={message.id}
        ></MessageCard>
      ))}
    </div>
  );
};

export default MessageList;
