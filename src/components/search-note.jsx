import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/stylesidebar.css';
import PropTypes from 'prop-types';

const Search = ({ keyword, keywordChange }) => {
  const navigate = useNavigate();

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;
    keywordChange(newKeyword);

    navigate(`?search=${encodeURIComponent(newKeyword)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    </nav>
  );
};

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default Search;
