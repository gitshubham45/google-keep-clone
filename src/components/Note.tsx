import React from 'react';
import { pinNote, deleteNote } from '../redux/actions';
import { useAppDispatch } from '../hooks';



interface NoteType {
    id: number;
    title: string;
    content: string;
    pinned: boolean;
}

interface NoteProps {
    note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {

    const dispatch = useAppDispatch();



    const handlePin = (id: number) => {
        // Dispatch action to pin the note
        dispatch(pinNote(id));
    };


    const handleDelete = (id: number) => {
        dispatch(deleteNote(id));
    };

    return (
        <div className={`note ${note.pinned ? 'pinned' : ''}`}>
            {note.title && <h3>{note.title}</h3>}
            <p>{note.content}</p>
            <div className="note-actions">
                <button onClick={() => handlePin(note.id)} className="pin-button">
                    {note.pinned ? 'Unpin' : 'Pin'}
                </button>
                <button onClick={() => handleDelete(note.id)} className="delete-button">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Note;
