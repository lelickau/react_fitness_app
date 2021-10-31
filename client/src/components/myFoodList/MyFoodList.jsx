import React from 'react';
import PlusMinusElem from '../UI/elems/PlusMinusElem';

import './myFoodList.scss';
import plusIco from '../../resources/icons/addTask.svg';
import MyFoodItem from '../myFoodItem/MyFoodItem';
import { useSelector } from 'react-redux';

function MyFoodList(props) {
    const myFavoritList = useSelector(state => state.foods.favoritList);

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
            {myFavoritList.length
            ? myFavoritList.map(food => <MyFoodItem key={food._id} myFood={food} />)
            : <></>
            }
            </div>
        </article>
    );
}

export default MyFoodList;