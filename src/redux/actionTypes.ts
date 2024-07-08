export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const PIN_NOTE = 'PIN_NOTE';

// Action types
interface AddNoteAction {
    type: typeof ADD_NOTE;
    payload: { title: string; content: string; id: number; color : string };
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: { id: number };
}

interface PinNoteAction {
    type: typeof PIN_NOTE;
    payload: { id: number ,  pinnedAt?: number; };
}

export type NoteActionTypes = AddNoteAction | DeleteNoteAction | PinNoteAction;
