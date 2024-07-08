import { ADD_NOTE, DELETE_NOTE, PIN_NOTE, NoteActionTypes } from './actionTypes';

interface Note {
    id: number;
    title: string;
    content: string;
    color: string;
    pinned: boolean;
    pinnedAt?: number;
}

interface NoteState {
    notes: Note[];
}

const initialState: NoteState = {
    notes: [],
};

const noteReducer = (state = initialState, action: NoteActionTypes): NoteState => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, { ...action.payload, pinned: false }],
            };
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload.id),
            };
        case PIN_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id
                        ? { ...note, pinned: !note.pinned, pinnedAt: note.pinned ? undefined : action.payload.pinnedAt }
                        : note
                ),
            };
        default:
            return state;
    }
};

export default noteReducer;
