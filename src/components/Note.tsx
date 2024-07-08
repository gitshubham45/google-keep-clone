import React from 'react';
import { pinNote, deleteNote } from '../redux/actions';
import { useAppDispatch } from '../hooks';
import { MdOutlinePushPin } from "react-icons/md";
import { RiUnpinFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";


interface NoteType {
    id: number;
    title: string;
    content: string;
    color : string;
    pinned: boolean;
    pinnedAt?: number;
}

interface NoteProps {
    note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {

    const dispatch = useAppDispatch();

    const handlePin = (id: number , pinnedAt : number) => {
        // Dispatch action to pin the note
        dispatch(pinNote(id,pinnedAt));
    };


    const handleDelete = (id: number) => {
        dispatch(deleteNote(id));
    };


    return (
        <div className={`note ${note.pinned ? 'pinned' : ''}`} style={{ borderColor: note.color || '#ffffff',borderWidth: '8px' }}>
            {note.title && <h3>{note.title}</h3>}
            <p>{note.content}</p>
            <div className="note-actions">
                <button onClick={() => handlePin(note.id,Date.now())} className="pin-button">
                    {note.pinned ? <RiUnpinFill /> : <MdOutlinePushPin />}
                </button>
                <button onClick={() => handleDelete(note.id)} className="delete-button">
                    <MdDeleteForever />
                </button>
            </div>
        </div>
    );
};

export default Note;
