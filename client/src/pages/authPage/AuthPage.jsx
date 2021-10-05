import React from 'react';
import ButtonItem from '../../components/UI/buttons/ButtonItem';
import InputItem from '../../components/UI/inputs/InputItem';


import arrowRight from '../../resources/icons/arrowRight.svg';
import './authPage.scss';

function AuthPage(props) {
    return (
        <div className="auth">
            <div className="auth__form">
                <h1 className="auth__title">Log In</h1>
                <label htmlFor="loginEmail"></label>
                <InputItem placeholder="Email" id="loginEmail" type="text" name="loginEmail"></InputItem>
                <label htmlFor="loginPassword"></label>
                <InputItem placeholder="Password" id="loginPassword" type="password" name="loginPassword"></InputItem>
                <ButtonItem btnStyle="btn__round"><img src={arrowRight} alt="LogIn" /></ButtonItem>
                <ButtonItem btnStyle="btn__round"><img src={arrowRight} alt="Registration" /></ButtonItem>
            </div>
        </div>
    );
}

export default AuthPage;