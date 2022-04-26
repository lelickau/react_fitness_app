import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LocalLoader from '../../components/loader/LocalLoader';
import FoodItem from '../../components/foodItem/FoodItem';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import MyFoodList from '../../components/myFoodList/MyFoodList';
import SearchFood from '../../components/searchFood/SearchFood';

import './foodPage.scss';

function FoodPage() {
    const {isAuth} = useSelector(state => state.user);
    const allSearchedFoods = useSelector(state => state.foods.searchFoodList);
    const isError = useSelector(state => state.global.isError);
    const isLoading = useSelector(state => state.global.isLoading);

    const [hiddenContent, setHiddenContent] = useState(false);
    const widthScreen = window.innerWidth;

    const showSearchContent = (e) => {
        e.preventDefault();
        setHiddenContent(false);
    }
    const showFavsContent = (e) => {
        e.preventDefault();
        setHiddenContent(true);
    }

    const guestStyle = {}
    if (!isAuth) {
        guestStyle.width = '100%'
    }

    return (
        <div className="food">
            <HeaderTitle>Food</HeaderTitle>
            {
                isAuth ?
                <div className={widthScreen < 1001 ? "food__tab-btns" : "hidden"}>
                    <button className={!hiddenContent ? "food__tab-btn food__tab-btn--active" : "food__tab-btn"} onClick={showSearchContent}>Search</button>
                    <button className={hiddenContent ? "food__tab-btn food__tab-btn--active" : "food__tab-btn"} onClick={showFavsContent}>My Favs</button>
                </div>
                :
                ''
            }
            <article className="food__content container">
                <div
                    className={hiddenContent ? "food__serach hidden" : "food__serach"}
                    style={{...guestStyle}}
                >
                    <SearchFood/>
                    <div className="food__serach-items">
                        {isLoading ? <div className="food__serach-loader"><LocalLoader/></div> : ""}
                        {!allSearchedFoods.length && isError
                        ? <div className="food__serach-error">Nothing was found for your query. Try again.</div>
                        : allSearchedFoods.map((item) => <FoodItem key={item.foodId} foods={item} />)
                    }
                    </div>
                </div>
                {
                    isAuth ?
                    <div
                        className={widthScreen < 1001 ? `food__add-create ${!hiddenContent ? 'hidden' : ''}` : "food__add-create"}>
                        <MyFoodList/>
                    </div>
                    :
                    ""
                }
            </article>
        </div>
    );
}

export default FoodPage;