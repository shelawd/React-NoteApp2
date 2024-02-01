import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css'

function Note({ title, body, createdAt }) {
  return (
    <div>
      <div className='note-container'>
      <h3 className='note-title'>{title}</h3>
      <p className='note-body'>{body}</p>
      <p className='note-createdat'>Created At: {createdAt}</p>
      </div>
      
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Note;
