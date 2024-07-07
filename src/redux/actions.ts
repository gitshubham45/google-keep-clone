import { ADD_NOTE, DELETE_NOTE, PIN_NOTE, NoteActionTypes } from './actionTypes';

export const addNote = (note: { title: string; content: string; id: number }): NoteActionTypes => ({
    type: ADD_NOTE,
    payload: note,
});

export const deleteNote = (id: number): NoteActionTypes => ({
    type: DELETE_NOTE,
    payload: { id },
});

export const pinNote = (id: number): NoteActionTypes => ({
    type: PIN_NOTE,
    payload: { id },
});
