import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentMessages,
  setCurrentPage,
  setTotalPages,
} from "../../redux/reducers";

const usePagination = () => {
  const { allMessages, pagination } = useSelector((s) => s?.messageBoard);
  const { pageSize, totalPages, currentPage } = pagination;
  const dispatch = useDispatch();

  const onPageClick = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const totalMessages = allMessages.length;

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(totalMessages / pageSize)));
    if (currentPage > totalPages) dispatch(setCurrentPage(1));
    dispatch(
      setCurrentMessages(
        allMessages.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      )
    );
  }, [allMessages, currentPage, dispatch, pageSize, totalMessages, totalPages]);

  return {
    totalPages,
    currentPage,
    onPageClick,
  };
};

export default usePagination;
