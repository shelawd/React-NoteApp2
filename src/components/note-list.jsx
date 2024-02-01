import React from 'react';
import PropTypes from 'prop-types';
import Note from './note';
import { getActiveNotes } from '../utils/local-data';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const NotesList = ({ keyword }) => {
  const activeNotes = getActiveNotes().filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className='notes-list-container'>
      {activeNotes.length > 0 ? (
        activeNotes.map((note) => (
          <Link to={`/note/${note.id}`} key={note.id}>
            <Note id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
          </Link>
        ))
      ) : (
        <p>Tidak ada catatan</p>
      )}
    </div>
  );
};

NotesList.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default NotesList;
