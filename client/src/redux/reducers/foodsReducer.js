const GET__FOOD = 'GET__FOOD';
const ADD__FOOD = 'ADD__FOOD';
const GET__FOODS = 'GET__FOODS';

const foodsState = {
    searchFoodList: [],
    favoritList: [],
}

export default function foodsReducer (state = foodsState, action) {
    switch (action.type) {
        case GET__FOOD:
            return {...state, searchFoodList: [...action.payload]}

        case ADD__FOOD:
            return {...state, favoritList: [...state.favoritList, action.payload]}

        case GET__FOODS:
            return {...state, favoritList: [...action.payload]}

        default:
            return state;
    }
}

export const searchFoodAC = (foods) => ({type: 'GET__FOOD', payload: foods});
export const addFoodAC = (food) => ({type: 'ADD__FOOD', payload: food});
export const getFoodsAC = (foods) => ({type: 'GET__FOODS', payload: foods});