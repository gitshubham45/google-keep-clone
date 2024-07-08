import React from 'react';
import {  useAppSelector } from '../hooks';
import Note from './Note';


// sorting the notes by the time they were pinned
const NotesGrid: React.FC = () => {
    const notes = useAppSelector((state) => state.notes);


    const sortedNotes = [...notes].sort((a, b) => {
        if (a.pinned && b.pinned) {
            return (a.pinnedAt ?? 0) - (b.pinnedAt ?? 0);
        }
        if (a.pinned) return -1;
        if (b.pinned) return 1;
        return a.id - b.id;
    });


    return (
        <div className="notes-grid">
            {sortedNotes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                />
            ))}
        </div>
    );
};

export default NotesGrid;
