import React, { useState } from 'react';
import InputItem from '../UI/inputs/InputItem';
import ButtonItem from '../UI/buttons/ButtonItem';
import PlusElem from '../UI/elems/PlusMinusElem';
import { useDispatch } from 'react-redux';
import {getFood} from '../../redux/actions/foods';

import plusIco from '../../resources/icons/addTask.svg';
import minusIco from '../../resources/icons/minus.svg';
import './searchFood.scss';

function SearchFood() {
    const [inputValue, setInputValue] = useState('');

    const changeHandler = (e) => {
        setInputValue(e.target.value.trim());
    }

    const dispatch = useDispatch();

    const getFoodsItem = (e) => {
        e.preventDefault();
        dispatch(getFood(inputValue));
    }
    return (
        <div className="search-food">
            <label className="search-food__title">Search an ingredient
                <div className="search-food__input-box">
                    <InputItem
                        type="text"
                        onChange={changeHandler}
                        placeholder="lemon"
                        value={inputValue}
                        name="foodName"
                        />
                    <div className="search-food__btn-box">
                        <ButtonItem
                            onClick={getFoodsItem}
                        >Search</ButtonItem>
                    </div>
                </div>
                <div className="search-food__choose-weight">
                    <PlusElem alt="minus" src={minusIco}/>
                    <label className="search-food__weight">
                        <input type="hidden" />
                        <span>100</span>
                        <span>g</span>
                    </label>
                    <PlusElem alt="plus" src={plusIco}/>
                </div>
                <div className="search-food__choose-weight">
                    <div className="search-food__weight-item">350<span>g</span></div>
                    <div className="search-food__weight-item">500<span>g</span></div>
                    <div className="search-food__weight-item">700<span>g</span></div>
                    <div className="search-food__weight-item">1000<span>g</span></div>
                </div>

            </label>
        </div>
    );
}

export default SearchFood;