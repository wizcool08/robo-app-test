import React from "react";

const SearchBox = ({ onSearchChange }) => {
  console.log("SearchBox");
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-lightest-blue "
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
