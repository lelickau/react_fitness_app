import React from 'react';

import './foodItem.scss';
import starEmpty from '../../resources/icons/star-empty.svg';
import starFill from '../../resources/icons/star-fill.svg';

function FoodItem(props) {

    const colorNutrients = {
        'crabs': {background: '#62CF58'},
        'protein': {background: '#F1B04A'},
        'fat': {background: '#6263D5'},
        'energy': {background: '#FFEE51'},
        'fiber': {background: '#996D2B'},
    }

    return (
        <article className="food-item">
            <div className="food-item__title-box">
                <img className="food-item__star" src={starEmpty} alt="Save" />
                <h3 className="food-item__title">Milk</h3>
            </div>
            <div className="food-item__nutrients">
                <div className="food-item__nutrients-item">
                    <div className="food-item__nutrient">
                        <div className="food-item__color" style={colorNutrients.crabs}></div>
                        <div className="food-item__nutrient-title">Crabs:</div>
                        <div className="food-item__nutrient-text"></div>
                    </div>
                    <div className="food-item__nutrient">
                        <div className="food-item__color" style={colorNutrients.protein}></div>
                        <div className="food-item__nutrient-title">Protein:</div>
                        <div className="food-item__nutrient-text"></div>
                    </div>
                    <div className="food-item__nutrient">
                        <div className="food-item__color" style={colorNutrients.fat}></div>
                        <div className="food-item__nutrient-title">Fat:</div>
                        <div className="food-item__nutrient-text"></div>
                    </div>
                </div>
                <div className="food-item__nutrients-item">
                    <div className="food-item__nutrient">
                        <div className="food-item__color" style={colorNutrients.energy}></div>
                        <div className="food-item__nutrient-title">Energy:</div>
                        <div className="food-item__nutrient-text"></div>
                    </div>
                    <div className="food-item__nutrient">
                        <div className="food-item__color" style={colorNutrients.fiber}></div>
                        <div className="food-item__nutrient-title">Fiber:</div>
                        <div className="food-item__nutrient-text">33</div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default FoodItem;