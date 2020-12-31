import React from "react";

const SearchContainer = ({ setSearchedText }) => {
  const handleChange = (e) => {
    setSearchedText(e.target.value);
  };

  return (
    <div className="ui right aligned category search">
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          onChange={handleChange}
          placeholder="Search names..."
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchContainer;
