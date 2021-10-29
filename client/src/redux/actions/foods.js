import axios from "axios";
import {APP_ID, API_KEY} from '../../env';
import {getFoodAC} from '../reducers/foodsReducer';

const API_URL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${API_KEY}`

export const getFood = (food) => {
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
            
            dispatch(getFoodAC(unDublicate(response.data.hints, 'foodId')))
        } catch (err) {
            console.log(err.response.data.message);
        }
    }
}