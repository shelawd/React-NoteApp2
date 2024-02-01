import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getArchivedNotes, deleteNote, archiveNote } from '../utils/local-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function ArchivedNotes() {
  const [notes, setNotes] = useState(getArchivedNotes());
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleNoteClick = (id) => {
    navigate(`/note/${id}`);
  };

  return (
    <div className='archived-notes'>
      {notes.length > 0 ? (
        <ul className="archived-list">
          {notes.map((note) => (
            <li key={note.id} className="archived-item">
              <div onClick={() => handleNoteClick(note.id)} className="archived-link">
                <h3 className="archived-title">{note.title}</h3>
                <p className="archived-date">Created At: {note.createdAt}</p>
                <p className="archived-body">{note.body}</p>
              </div>
              <div className="archived-buttons">
                <button className="btn-delete" onClick={() => handleDelete(note.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-archived">Arsip kosong</p>
      )}
    </div>
  );
}



export default ArchivedNotes;
