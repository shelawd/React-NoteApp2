import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote } from '../utils/local-data'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArchive } from '@fortawesome/free-solid-svg-icons';

function NoteDetail() {
    const { id } = useParams();
    const note = getNote(id);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteNote(id);
        navigate("/home"); 
    };

    const handleArchive = () => {
        archiveNote(id);
        navigate("/home"); 
    };

    return (
        <div className='detail-note'>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
            <p>Created At: {note.createdAt}</p>

            <button className="btn-delete" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} /> Hapus
            </button>

            <button className="btn-archive" onClick={handleArchive}>
                <FontAwesomeIcon icon={faArchive} /> Arsip
            </button>
        </div>
    );
}

export default NoteDetail;
