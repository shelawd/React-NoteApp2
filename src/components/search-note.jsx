import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/stylesidebar.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Search = ({ keyword, keywordChange, logout, name }) => {
  const navigate = useNavigate();

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;
    keywordChange(newKeyword);

    navigate(`?search=${encodeURIComponent(newKeyword)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    logout(); 
  };

  return (
    <nav className="navbar">
      <Link to="/home">
        <img src="/public/asset/1.png" alt="" />
      </Link>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-4"
          type="search"
          placeholder="Cari catatan..."
          aria-label="Search"
          value={keyword}
          onChange={handleKeywordChange}
        />
      </form>
      <button className="logout-button" onClick={handleLogout}>{name}
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
      </button>
    </nav>
  );
};

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Search;
