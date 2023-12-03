import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessages, postMessage } from "../../redux/apis";

const usePostMessageSection = () => {
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

  const handleDeleteSelectedClick = (setShowModal) => {
    if (selectedMessageIds?.length > 1) {
      setShowModal(true);
    } else {
      dispatch(deleteMessages(selectedMessageIds));
    }
  };

  return {
    textMessage,
    handleTextChange,
    handlePostClick,
    handleDeleteSelectedClick,
    selectedMessageIds,
  };
};

export default usePostMessageSection;
