import React, { useEffect, useState } from "react";
import PostMessageSection from "../components/PostMessageSection/PostMessageSection";
import MessageList from "../components/MessageList/MessageList";
import "./MessageBoard.scss";
import Dropdown from "../components/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { fetchAllMessages } from "../redux/apis";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/Pagination/Pagination";

const MessageBoard = () => {
  const dispatch = useDispatch();
  const [showModal , setShowModal] = useState(false);
  useEffect(() => {
    dispatch(fetchAllMessages());
  }, []);
  return (
    <div className="message-board">
      <h1 className="title" >Message Board</h1>
      <div className="post-and-sort">
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        <PostMessageSection setShowModal={setShowModal} ></PostMessageSection>
        <Dropdown></Dropdown>
      </div>
      <MessageList></MessageList>
      <Pagination></Pagination>
    </div>
  );
};

export default MessageBoard;
