import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

function Header({ onSearch, scrollToTop, scrollTo, resetSearch }) {
  const [txtSearch, setSearch] = useState("");
  const handleHomeClick = () => {
    scrollToTop();
    resetSearch();
  };
  const search = () => {
    scrollToTop();
    setTimeout(() => {
      onSearch(txtSearch);
    }, 300);
  };

  return (
    <div className="p-4 bg-black flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Link
          className="text-[40px] uppercase font-bold text-red-500 cursor-pointer"
          onClick={handleHomeClick}
        >
          CineZone
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            to="Phim HOT"
            smooth={true}
            duration={500}
            className="text-wrap text-white cursor-pointer"
            onClick={() => scrollTo("Phim HOT")}
          >
            Phim HOT
          </Link>
          <Link
            to="Phim đề cử"
            smooth={true}
            duration={500}
            className="text-wrap text-white cursor-pointer"
            onClick={() => scrollTo("Phim đề cử")}
          >
            Phim đề cử
          </Link>
        </nav>
      </div>
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-3 text-black rounded"
          onChange={(e) => setSearch(e.target.value)}
          value={txtSearch}
        />
        <button
          className="p-2 text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
};

export default Header;
