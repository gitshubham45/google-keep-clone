import { ADD_NOTE, DELETE_NOTE, PIN_NOTE, NoteActionTypes } from './actionTypes';

// Note actions 
export const addNote = (note: { title: string; content: string; id: number ; color : string}): NoteActionTypes => ({
    type: ADD_NOTE,
    payload: note,
});

export const deleteNote = (id: number): NoteActionTypes => ({
    type: DELETE_NOTE,
    payload: { id },
});

export const pinNote = (id: number , pinnedAt : number): NoteActionTypes => ({
    type: PIN_NOTE,
    payload: { id , pinnedAt },
});



