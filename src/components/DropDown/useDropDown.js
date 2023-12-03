import { useDispatch, useSelector } from 'react-redux';
import { setAllMessages, setSelectedSort } from '../../redux/reducers';

const useDropdown = () => {
  const { allMessages, selectedSort } = useSelector((s) => s?.messageBoard);
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const value = event.target.value;

    if (value === 'Oldest' || value === 'Latest') {
      dispatch(setSelectedSort(value));

      const newAllMessages = [...allMessages];
      newAllMessages.sort((a, b) => {
        const compareResult =
          value === 'Oldest'
            ? a.timestamp.localeCompare(b.timestamp)
            : b.timestamp.localeCompare(a.timestamp);

        return compareResult;
      });

      dispatch(setAllMessages(newAllMessages));
    }
  };

  return { selectedSort, handleSelectChange };
};

export default useDropdown;
