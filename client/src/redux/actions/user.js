import axios from "axios";
import { setUserAC, logoutAC, setLoading } from "../reducers/userReducer";

const API_URL = `/api/auth/`;

export const registration = async ({email, password}) => {
    try {
        const response = await axios.post(`${API_URL}registration`, {
            email, password
        });
        // console.log(response.data.message);
    } catch (err) {
        console.log(err.response.data.message);
    }
}

export const login = ({email, password}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}login`, {
                email,
                password
            });
            console.log(response.data.user)
            dispatch(setUserAC(response.data.user))
            localStorage.setItem('token', response.data.accessToken);

        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}logout`);
            localStorage.removeItem('token');

            console.log(response)
            dispatch(logoutAC())

        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}

export const authentication = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}refresh`, {withCredentials: true});
            // console.log(response)
            dispatch(setUserAC(response.data.user))
            localStorage.setItem('token', response.data.accessToken);
        } catch (e) {
            localStorage.removeItem('token');
        }
    }
}