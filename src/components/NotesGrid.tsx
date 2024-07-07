import React from 'react';
import {  useAppSelector } from '../hooks';
import Note from './Note';
// import './NotesGrid.css';

const NotesGrid: React.FC = () => {
    const notes = useAppSelector((state) => state.notes);


    return (
        <div className="notes-grid">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                />
            ))}
        </div>
    );
};

export default NotesGrid;
