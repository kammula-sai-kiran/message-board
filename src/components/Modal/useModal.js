import { useDispatch, useSelector } from "react-redux";
import { deleteMessages } from "../../redux/apis";

const useModal = (props) => {
  const { showModal, setShowModal } = props;
  const dispatch = useDispatch();
  const selectedMessageIds = useSelector(
    (s) => s?.messageBoard?.selectedMessageIds
  );

  const handleYesClick = () => {
    setShowModal(false);
    dispatch(deleteMessages(selectedMessageIds));
  };

  const handleCancelClick = () => {
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    closeModal,
    handleYesClick,
    handleCancelClick,
  };
};

export default useModal;
