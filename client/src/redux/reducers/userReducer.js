const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const userState = {
    currentUser: {},
    isAuth: false,
}

export default function userReducer (state = userState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false,
            }
        default:
            return state;
    }

}

// action creator
export const setUserAC = (user) => ({type: SET_USER, payload: user});
export const logoutAC = () => ({type: LOGOUT});

