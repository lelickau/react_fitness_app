import React from 'react';
import PlusMinusElem from '../UI/elems/PlusMinusElem';

import './myFoodList.scss';
import plusIco from '../../resources/icons/addTask.svg';
import MyFoodItem from '../myFoodItem/MyFoodItem';

function MyFoodList(props) {
    return (
        <article className="food-list">
            <div className="food-list__title-box">
                <h1 className="food-list__title">My food</h1>
                <button className="food-list__add">
                    <PlusMinusElem alt="Add" src={plusIco} />
                    <div className="food-list__add-title">Add food</div>
                </button>
            </div>
            <div className="food-list__content">
                <MyFoodItem/>
                <MyFoodItem/>
                <MyFoodItem/>
            </div>
        </article>
    );
}

export default MyFoodList;