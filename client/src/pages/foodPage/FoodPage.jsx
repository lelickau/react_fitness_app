import React from 'react';
import FoodItem from '../../components/foodItem/FoodItem';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import SearchFood from '../../components/searchFood/SearchFood';


function FoodPage(props) {
    return (
        <div className="food">
            <HeaderTitle>Food</HeaderTitle>
            <article className="food__content container">
                <SearchFood/>
                <FoodItem/>
            </article>
        </div>
    );
}

export default FoodPage;