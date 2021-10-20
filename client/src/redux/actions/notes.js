import axios from "axios";
import { getNotesAC, deleteNoteAC } from "../reducers/notesReducer";

const API_URL = `/api/notes/`;

export const createNote = async ({title, marking, status}) => {
    try {
        const response = await axios.post(`${API_URL}create`, {title, marking, status}, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
    } catch (err) {
        console.log(err.response.data.message);
    }
}

export const getNotes = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}getall`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response.data)
            dispatch(getNotesAC(response.data))
        } catch (err) {
            console.log(err.response.data.message);
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
