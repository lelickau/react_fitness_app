const GET__FOOD = 'GET__FOOD';

const foodsState = {
    searchFoodList: [],
}

export default function foodsReducer (state = foodsState, action) {
    switch (action.type) {
        case GET__FOOD:
            return {...state, searchFoodList: [...action.payload]}

        default:
            return state;
    }
}

export const getFoodAC = (foods) => ({type: 'GET__FOOD', payload: foods});