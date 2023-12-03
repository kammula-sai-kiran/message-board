import React from "react";
import { useSelector } from "react-redux";
import MessageCard from "../MessageCard/MessageCard";

import "./MessageList.scss";

const MessageList = () => {
  const currentMessages = useSelector((s) => s?.messageBoard?.currentMessages);

  return (
    <div className="message-list">
      {!currentMessages?.length ?
      <div> No Messages! Post new messages to view  </div> :
      currentMessages?.map((message) => (
        <MessageCard
          {...message}
          key={message.id}
        ></MessageCard>
      ))}
    </div>
  );
};

export default MessageList;
