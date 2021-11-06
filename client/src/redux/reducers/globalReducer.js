const ERROR__NOTE = 'ERROR__NOTE';
const CHANGE__LOADING = 'CHANGE__LOADING';
const CHANGE__HIDDEN = 'CHANGE__HIDDEN';

const globalState = {
    isLoading: false,
    isError: false,
    isHidden: true
}

export default function foodsReducer (state = globalState, action) {
    switch (action.type) {
        case ERROR__NOTE:
            return {...state, isError: action.payload}

        case CHANGE__LOADING:
            return {...state, isLoading: action.payload}

        case CHANGE__HIDDEN:
            return {...state, isHidden: action.payload}

        default:
            return state;
    }
}

export const errorAC = (val) => ({type: 'ERROR__NOTE', payload: val});
export const changeHiddenAC = (val) => ({type: 'CHANGE__HIDDEN', payload: val});
export const changeLoadingAC = (val) => ({type: 'CHANGE__LOADING', payload: val});
