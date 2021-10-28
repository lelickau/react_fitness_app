import React from 'react';
import InputItem from '../UI/inputs/InputItem';
import ButtonItem from '../UI/buttons/ButtonItem';
import PlusElem from '../UI/elems/PlusMinusElem';

import plusIco from '../../resources/icons/addTask.svg';
import minusIco from '../../resources/icons/minus.svg';
import './searchFood.scss';

function SearchFood() {
    return (
        <div className="search-food">
            <label className="search-food__title">Search an ingredient
                <div className="search-food__input-box">
                    <InputItem placeholder="lemon"/>
                    <div className="search-food__btn-box">
                        <ButtonItem>Search</ButtonItem>
                    </div>
                </div>
                <div className="search-food__choose-weight">
                    <PlusElem src={minusIco}/>
                    <label className="search-food__weight">
                        <input type="hidden" />
                        <span>100</span>
                        <span>g</span>
                    </label>
                    <PlusElem src={plusIco}/>
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