const GET__NOTES = 'GET__NOTES';
const DELETE__NOTE = 'DELETE__NOTE';
const EDIT__NOTE = 'EDIT__NOTE';

const notesState = {
    notesList: []
};

export default function notesReducer (state = notesState, action) {
    switch (action.type) {
        case GET__NOTES:
            return {...state, notesList: [...state.notesList, ...action.payload]}

        default:
            return state;
    }

}

export const getNotesAC = (notes) => ({type: GET__NOTES, payload: notes});