import React, { useState } from 'react';
import NutrientItem from '../UI/elems/NutrientItem';

import starIco from '../../resources/icons/star-fill.svg';
import './myFoodItem.scss';

function MyFoodItem(props) {

    const [visibility, setVisibility] = useState(false);

    const openFoodItem = (e) => {
        setVisibility(!visibility);
    }

    return (
        <article className="my-food">
            <div
                className="my-food__title-box"
                onClick={openFoodItem}
            >
                <img className="my-food__marking" src={starIco} alt="Favs" />
                <h3 className="my-food__title">Whole Milk</h3>
                <span className={`my-food__arrow ${visibility ? 'my-food__close' : 'my-food__open'}`}></span>
            </div>
            <div className={`my-food__content ${visibility ? "my-food__content--open" : "hidden"}` }>
                <div className="my-food__nutrients-item">
                        <NutrientItem color={'crabs'}/>
                        <NutrientItem color={'protein'}/>
                        <NutrientItem color={'fat'}/>
                    </div>
                    <div className="my-food__nutrients-item">
                        <NutrientItem color={'energy'} measure={'kcal'}/>
                        <NutrientItem color={'fiber'} />
                    </div>
            </div>
        </article>
    );
}

export default MyFoodItem;