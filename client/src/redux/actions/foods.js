import axios from "axios";
import {APP_ID, API_KEY} from '../../env';
import {searchFoodAC, addFoodAC, getFoodsAC} from '../reducers/foodsReducer';

const API_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}`

const API_URL_MDB = `/api/foods/`;

export const searchFood = (food) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}&ingr=${food}`);
            console.log(response.data.hints);

            function unDublicate(arr, propertyName) {
                if ((Array.isArray(arr) || arr instanceof Array)
                && arr.length
                && typeof propertyName === 'string'
                && propertyName.length) {
                    const arrayFromKey = arr.map(item => item.food[propertyName]);
                    const strarr = arrayFromKey.filter((currentVal, ind) => {
                        return arrayFromKey.indexOf(currentVal) === ind
                    });
                    return strarr.map(key => arr.find(item => item.food[propertyName] === key))
                }
            }

            dispatch(searchFoodAC(unDublicate(response.data.hints, 'foodId')))
        } catch (err) {
            console.log(err.response.data.message);
        }
    }
}

export const addFood = (food) => {
    return async dispatch => {
        try {
            const dataFood = {
                label: food.food.label,
                CHOCDF: (food.food.nutrients.CHOCDF).toFixed(1) || 0,
                PROCNT: (food.food.nutrients.PROCNT).toFixed(1) || 0,
                FAT: (food.food.nutrients.FAT).toFixed(1) || 0,
                ENERC_KCAL: (food.food.nutrients.ENERC_KCAL).toFixed(1) || 0,
                FIBTG: (food.food.nutrients.FIBTG).toFixed(1) || 0,
                searchFood: true,
                foodId: food.food.foodId
            }
            const response = await axios.post(`${API_URL_MDB}create`, dataFood, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });

            dispatch(addFoodAC(response.data));
        } catch (err) {
            console.log(err.response);
        }
    }
}

export const getFoods = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL_MDB}getfoods`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response.data);

            dispatch(getFoodsAC(response.data));
        } catch (err) {
            console.log(err.response.data.message);
        }
    }
}