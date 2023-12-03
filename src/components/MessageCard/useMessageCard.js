import { useDispatch, useSelector } from 'react-redux';
import { deleteMessages } from '../../redux/apis';
import { setSelectedMessageIds } from '../../redux/reducers';

const useMessageCard = (props) => {
  const selectedMessageIds = useSelector((s) => s?.messageBoard?.selectedMessageIds);
  const dispatch = useDispatch();
  const { id, text, source, timestamp } = props;
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

  return {
    selectedMessageIds,
    date,
    onDeleteClick,
    onCheckBoxClick,
    id,
    text,
    source,
  };
};

export default useMessageCard;
