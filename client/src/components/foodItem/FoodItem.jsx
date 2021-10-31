import React, {useState} from 'react';

import './foodItem.scss';
import starEmpty from '../../resources/icons/star-empty.svg';
import starFill from '../../resources/icons/star-fill.svg';
import NutrientItem from '../UI/elems/NutrientItem';
import { useDispatch } from 'react-redux';
import { addFood } from '../../redux/actions/foods';

function FoodItem({foods}) {

    const dispatch = useDispatch();

    const addSearchFood = (e) => {
        e.preventDefault();
        dispatch(addFood(foods));
    }

    return (
        <article className="food-item">
            <div className="food-item__title-box">
                <button onClick={addSearchFood}>
                    <img className="food-item__star" src={starEmpty} alt="Save" />
                </button>
                <h3 className="food-item__title">{foods.food.label}</h3>
            </div>
            <div className="food-item__nutrients">
                <div className="food-item__nutrients-item">
                    <NutrientItem value={(foods.food.nutrients.CHOCDF).toFixed(1)} color={'crabs'}/>
                    <NutrientItem value={(foods.food.nutrients.PROCNT).toFixed(1)} color={'protein'}/>
                    <NutrientItem value={(foods.food.nutrients.FAT).toFixed(1)} color={'fat'}/>
                </div>
                <div className="food-item__nutrients-item">
                    <NutrientItem value={(foods.food.nutrients.ENERC_KCAL).toFixed(1)} color={'energy'} measure={'kcal'}/>
                    <NutrientItem value={foods.food.nutrients.FIBTG ? (foods.food.nutrients.FIBTG).toFixed(1) : '0'} color={'fiber'} />
                </div>
            </div>
        </article>
    );
}

export default FoodItem;