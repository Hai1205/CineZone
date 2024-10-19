import { useState } from "react";
import PropTypes from "prop-types";

function Header({ onSearch }) {
  const [txtSearch, setSearch] = useState("");

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[40px] uppercase font-bold text-red-500">
          CineZone
        </h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-wrap text-white">
            Home
          </a>
          <a href="#" className="text-wrap text-white">
            About
          </a>
          <a href="#" className="text-wrap text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-3 text-black"
          onChange={(e) => setSearch(e.target.value)}
          value={txtSearch}
        />
        <button
          className="p-2 text-white bg-red-600"
          onClick={() => onSearch(txtSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired, // Đảm bảo onSearch là bắt buộc
};

export default Header;