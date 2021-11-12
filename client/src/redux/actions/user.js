import axios from "axios";
import { setErrorAC, setSuccessAC } from "../reducers/globalReducer";
import { setUserAC, logoutAC, errorAuthAC } from "../reducers/userReducer";

const API_URL = `/api/auth/`;

export const registration = ({email, password}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}registration`, {
                email, password
            });
            console.log(response);

        } catch (e) {
            dispatch(errorAuthAC(e.response.data.message))
            console.log(e.response.data.message);
        }
    }

}

export const login = ({email, password}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}login`, {
                email,
                password
            });
            console.log(response)
            dispatch(setUserAC(response.data.user))
            localStorage.setItem('token', response.data.accessToken);

        } catch (e) {
            dispatch(errorAuthAC(e.response.data.message))
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
            dispatch(errorAuthAC(e.response.data.message))
            console.log(e.response.data.message);
        }
    }
}

export const authentication = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}refresh`, {withCredentials: true});
            dispatch(setUserAC(response.data.user));
            localStorage.setItem('token', response.data.accessToken);
        } catch (e) {
            localStorage.removeItem('token');
        }
    }
}

export const reset = ({email}) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}reset`, {email});
            console.log(response);
            if (response.status === 200) {
                dispatch(setSuccessAC(response.data.email))
            }

        } catch (e) {
            dispatch(setErrorAC(e.response.data.message))
            console.log(e.response.data.message);
        }
    }
}

export const updatePassword = ({password}, token) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}update/${token}`, {password});
            if (response.status === 200) {
                dispatch(setSuccessAC(true))
            }
        } catch (e) {
            dispatch(setErrorAC(e.response.data.message))
            console.log(e.response.data.message);
        }
    }
}