import axios from "axios";
import { getNotesAC, deleteNoteAC, changeHiddenAC, editNoteAC, createNoteAC, errorNoteAC, changeLoadingAC } from "../reducers/notesReducer";

const API_URL = `/api/notes/`;

export const createNote = ({title, description, marking, status}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}create`, {title, description, marking, status}, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(createNoteAC(response.data));
        } catch (err) {
            dispatch(errorNoteAC(err.response.data.message));
            console.log(err.response.data.message);
        }
    }

}

export const getNotes = () => {
    return async dispatch => {
        dispatch(changeLoadingAC(true));
        try {
            const response = await axios.get(`${API_URL}getall`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response.data)
            dispatch(getNotesAC(response.data))
        } catch (err) {
            console.log(err.response.data.message);
        } finally {
            dispatch(changeLoadingAC(false));
        }
    }
}
export const deleteFile = (task) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}delete?id=${task._id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(deleteNoteAC(task._id));
            console.log(response.data.message);
        } catch (err) {
            console.log(err?.response?.data?.message);
        }
    }
}

export const changeHidden = (val) => {
    return dispatch => {
        dispatch(changeHiddenAC(val));
    }
}

export const cleanIsError = (val) => {
    return dispatch => {
        dispatch(errorNoteAC(val));
    }
}

export const editNote = (task) => {
    return dispatch => {
        dispatch(editNoteAC(task));
    }
}

export const updateEditNote = async ({title, description, marking, status}, id) => {
    try {
        const response = await axios.put(`${API_URL}edit/${id}`, {title, description, marking, status}, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
    } catch (err) {
        console.log(err.response.data.message);
    }
}

