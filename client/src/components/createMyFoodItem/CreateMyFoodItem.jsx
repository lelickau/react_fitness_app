import React from 'react';
import ButtonItem from '../UI/buttons/ButtonItem';
import InputItem from '../UI/inputs/InputItem';

import './createMyFoodItem.scss';

function CreateMyFoodItem() {
    return (
        <div className="create-food">
            <form className="create-food__form">
                <div className="create-food__btns">
                    <button
                            className="create-food__cancel-btn"
                            //onClick={cancelCreateNote}
                    >Cancel</button>
                    <ButtonItem
                            //onClick={createAndAddNote}
                    >Add</ButtonItem>
                </div>
                <div className="create-food__data-box">
                    <div className="create-food__data">
                        <label className="create-food__label-item">Name of food
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="orange"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                        <label className="create-food__label-item"><span className="create-food__point create-food__crabs"></span>Crabs (g)
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="4.8"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                        <label className="create-food__label-item"><span className="create-food__point create-food__fat"></span>Total fat (g)
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="3.1"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                        <label className="create-food__label-item"><span className="create-food__point create-food__protein"></span>Protein (g)
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="3.2"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className="create-food__data">
                        <label className="create-food__label-item">Per grams of product (g)
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="100"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                        <label className="create-food__label-item"><span className="create-food__point create-food__energy"></span>Energy per serving (kcal)
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="61"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                        <label className="create-food__label-item"><span className="create-food__point create-food__fiber"></span> Dietary fiber (g)
                            <InputItem
                                //className="create-food__input-title"
                                placeholder="0"
                                type="text"
                                name='title'
                                //value={task.title}
                                //onChange={changeHandler}
                            />
                        </label>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default CreateMyFoodItem;