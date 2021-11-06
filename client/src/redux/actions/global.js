import { changeHiddenAC, errorAC} from "../reducers/globalReducer";

export const changeHidden = (val) => {
    return dispatch => {
        dispatch(changeHiddenAC(val));
    }
}

export const cleanIsError = (val) => {
    return dispatch => {
        dispatch(errorAC(val));
    }
}
