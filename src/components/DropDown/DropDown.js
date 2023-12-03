import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllMessages, setSelectedSort } from "../../redux/reducers";
import "./DropDown.scss";

const Dropdown = () => {
  const {allMessages, selectedSort} = useSelector((s) => s?.messageBoard);

  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    if (event.target.value === "Oldest") {
      dispatch(setSelectedSort(event.target.value));
      const newAllMessages = [...allMessages]
      newAllMessages.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
      dispatch(setAllMessages(newAllMessages));
    }
    if (event.target.value === "Latest") {
      dispatch(setSelectedSort(event.target.value));
      const newAllMessages = [...allMessages]
      newAllMessages.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
      dispatch(setAllMessages(newAllMessages));
    }
  };

  return (
    <div className="dropdown">
      <select
        id="dropdown"
        value={selectedSort}
        onChange={handleSelectChange}
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        <option value="Oldest">Oldest First</option>
        <option value="Latest">Latest First</option>
      </select>
    </div>
  );
};

export default Dropdown;
