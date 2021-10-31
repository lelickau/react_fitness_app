import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from '../../components/foodItem/FoodItem';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import MyFoodList from '../../components/myFoodList/MyFoodList';
import SearchFood from '../../components/searchFood/SearchFood';
import { getFoods } from '../../redux/actions/foods';

import './foodPage.scss';

function FoodPage() {
    const dispatch = useDispatch()
    const allSearchedFoods = useSelector(state => state.foods.searchFoodList);

    useEffect(() => {
        dispatch(getFoods())
    }, [dispatch]);

    return (
        <div className="food">
            <HeaderTitle>Food</HeaderTitle>
            <article className="food__content container">
                <div className="food__serach">
                    <SearchFood/>
                    <div className="food__serach-items">
                        {!allSearchedFoods.length
                        ? <></>
                        : allSearchedFoods.map((item) => <FoodItem key={item.food.foodId} foods={item} />)
                    }
                    </div>
                </div>
                <div className="food__add-create">
                    <MyFoodList/>
                </div>
            </article>
        </div>
    );
}

export default FoodPage;