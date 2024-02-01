import React from "react";
import PropTypes from 'prop-types';
import '../styles/stylesidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

const SideBarNew = ({ handleArchivedClick }) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="side-bar">
        <ul className="list-unstyled">
          <li className="sidebar-block" onClick={handleArchivedClick}>
            <Link to="/archived">Arsip</Link>
          </li>
        </ul>

        <div className="add-note-btn">
          <Link to="/add-note">
            <button className="dotted-btn">Tambah Catatan Baru</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SideBarNew.propTypes = {
  handleArchivedClick: PropTypes.func.isRequired,
};

export default SideBarNew;
