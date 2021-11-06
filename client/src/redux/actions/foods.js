import axios from "axios";
import {APP_ID, API_KEY} from '../../env';
import {searchFoodAC, cleanFoodListAC, addFoodAC, getFoodsAC, setFavoriteAC, deleteFavsFoodAC} from '../reducers/foodsReducer';
import { errorAC } from "../reducers/globalReducer";

const API_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}`

const API_URL_MDB = `/api/foods/`;

function FormationDataFood (objFood, weight = 100){
    const {food} = objFood;
    this.label = food.label;
    this.CHOCDF = 'CHOCDF' in food.nutrients ? ((food.nutrients.CHOCDF)*weight/100).toFixed(1) : 0;
    this.PROCNT = 'PROCNT' in food.nutrients ? ((food.nutrients.PROCNT)*weight/100).toFixed(1) : 0;
    this.FAT = 'FAT' in food.nutrients ? ((food.nutrients.FAT)*weight/100).toFixed(1) : 0;
    this.ENERC_KCAL = 'ENERC_KCAL' in food.nutrients ? ((food.nutrients.ENERC_KCAL)*weight/100).toFixed(1) : 0;
    this.FIBTG =  'FIBTG' in food.nutrients ? ((food.nutrients.FIBTG)*weight/100).toFixed(1) : 0;
    this.searchFood = false;
    this.foodId = food.foodId;
    this.scale = weight;
}

function unDublicate(arr, propertyName) {
    if ((Array.isArray(arr) || arr instanceof Array)
    && arr.length
    && typeof propertyName === 'string'
    && propertyName.length) {
        const arrayFromKey = arr.map(item => item.food[propertyName]);

        const strarr = arrayFromKey.filter((currentVal, ind) => {
            return arrayFromKey.indexOf(currentVal) === ind
        });
        //console.log(strarr);

        return strarr.map(key => arr.find(item => item.food[propertyName] === key))
    }
}

function findIdFoods(arr, propertyName) {
    return arr.map(item => item[propertyName]);
}

export const searchFood = (food, favsList, weight) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}&ingr=${food}`);

            if (!response.data.hints.length) {
                dispatch(errorAC(true));
                dispatch(cleanFoodListAC());

            } else {
                const dataFoods = unDublicate(response.data.hints, 'foodId');

                const dataFoodsStore = dataFoods.map(item => new FormationDataFood(item, weight));
                //console.log(dataFoodsStore);

                const favsFoodIds = findIdFoods(favsList, 'foodId');
                const finalyFoodData = dataFoodsStore.map(el => {
                    for (let item of favsFoodIds) {
                        if (el.foodId === item) {
                            return {...el, searchFood: true}
                        }
                    }
                    return {...el}
                })
                //console.log(finalyFoodData);

                dispatch(searchFoodAC(finalyFoodData));
            }

        } catch (err) {
            console.log(err.response.data.message);
        }
    }
}

export const setFavorite = (foodId) => {
    return dispatch => {
        dispatch(setFavoriteAC(foodId));
    }
}

export const addFood = (food) => {
    return async dispatch => {
        try {
            
            const response = await axios.post(`${API_URL_MDB}create`, food, {
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

export const deleteFavsFood = (idFood) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL_MDB}delete?id=${idFood}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });

            console.log(response.data);

            dispatch(deleteFavsFoodAC(idFood));
        } catch (err) {
            console.log(err.response.data.message);
        }
    }
}

