import React from "react";
import useDropdown from "./useDropDown";
import "./DropDown.scss";

const Dropdown = () => {
  const { selectedSort, handleSelectChange } = useDropdown();

  return (
    <div className="dropdown">
      <select
        id="dropdown"
        value={selectedSort}
        onChange={handleSelectChange}
      >
        <option value="" disabled hidden>
          Sort the messages
        </option>
        <option value="Oldest">Oldest First</option>
        <option value="Latest">Latest First</option>
      </select>
    </div>
  );
};

export default Dropdown;
