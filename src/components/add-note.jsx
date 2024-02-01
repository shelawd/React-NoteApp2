import React, { useState } from "react";
import '../styles/stylesidebar.css';
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const AddNote = ({ title: initialTitle = '', body: initialBody = '' }) => {
    const navigate = useNavigate();
    const [noteData, setNoteData] = useState({
        title: initialTitle,
        body: initialBody,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title" && noteData.title.length >= 50 && value.length >= 50) {
            console.log("max character limit!");
        } else {
            setNoteData({
                ...noteData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(noteData);
        navigate("/home");
    };

    return (
        <div className="add-note-page-container">
            <h1>Buat Catatan</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label>Sisa Karakter: {50 - noteData.title.length}</label>
                <input 
                    name="title"
                    className="judul"
                    placeholder="Tulis judul"
                    value={noteData.title}
                    onChange={handleChange}
                />
                <textarea 
                    className="form-body"
                    name="body"  
                    rows="10"
                    placeholder="Tulis catatan"
                    value={noteData.body}
                    onChange={handleChange}
                ></textarea>
                <button className="btn-submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

AddNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default AddNote;
