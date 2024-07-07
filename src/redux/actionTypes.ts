export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const PIN_NOTE = 'PIN_NOTE';

interface AddNoteAction {
    type: typeof ADD_NOTE;
    payload: { title: string; content: string; id: number };
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: { id: number };
}

interface PinNoteAction {
    type: typeof PIN_NOTE;
    payload: { id: number };
}

export type NoteActionTypes = AddNoteAction | DeleteNoteAction | PinNoteAction;
