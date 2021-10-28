const GET__NOTES = 'GET__NOTES';
const DELETE__NOTE = 'DELETE__NOTE';
const EDIT__NOTE = 'EDIT__NOTE';
const CHANGE__HIDDEN = 'CHANGE__HIDDEN';
const CREATE__NOTE = 'CREATE__NOTE';
const ERROR__NOTE = 'ERROR__NOTE';
const CHANGE__LOADING = 'CHANGE__LOADING';

const notesState = {
    notesList: [],
    hiddenCreate: true,
    editNote: [],
    isError: null,
    isLoading: false
};

export default function notesReducer (state = notesState, action) {
    switch (action.type) {
        case GET__NOTES:
            return {...state, notesList: [...action.payload]}

        case CREATE__NOTE:
            return {...state, notesList: [...state.notesList, action.payload]}

        case DELETE__NOTE:
            return {...state, notesList: [...state.notesList.filter(note => note._id !== action.payload)]}

        case CHANGE__HIDDEN:
            return {...state, hiddenCreate: action.payload}

        case EDIT__NOTE:
            return {...state, editNote: [action.payload]}

        case ERROR__NOTE:
            return {...state, isError: action.payload}

        case CHANGE__LOADING:
            return {...state, isLoading: action.payload}

        default:
            return state;
    }

}

export const getNotesAC = (notes) => ({type: GET__NOTES, payload: notes});
export const createNoteAC = (note) => ({type: CREATE__NOTE, payload: note});
export const deleteNoteAC = (noteId) => ({type: DELETE__NOTE, payload: noteId});
export const changeHiddenAC = (val) => ({type: CHANGE__HIDDEN, payload: val});
export const editNoteAC = (task) => ({type: EDIT__NOTE, payload: task});
export const errorNoteAC = (err) => ({type: ERROR__NOTE, payload: err});
export const changeLoadingAC = (val) => ({type: CHANGE__LOADING, payload: val});