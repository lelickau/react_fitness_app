import React, {useEffect, useState} from 'react';
import ButtonItem from '../../components/UI/buttons/ButtonItem';
import InputItem from '../../components/UI/inputs/InputItem';
import { useHttp } from '../../hooks/http.hook';


import arrowRight from '../../resources/icons/arrowRight.svg';
import './authPage.scss';

function AuthPage(props) {
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });

    // error ?
    const showError = (text) => {
        console.log(text)
    }

    useEffect(() => {
        showError(error);
        clearError()
    }, [error, clearError])

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            console.log(data);
        } catch (err) {}
    }

    return (
        <div className="auth">
            <div className="auth__form-box">
                <div className="auth__tabs">
                    <div className="auth__tab-login hidden">Login</div>
                    <div className="auth__tab-register">Register</div>
                </div>

                <div className="auth__form">
                    <h1 className="auth__title">Login</h1>
                    <div className="auth__inputs">
                        <label>
                            <InputItem
                                placeholder="Email"
                                id="loginEmail"
                                type="text"
                                className="auth__input"
                                name="email"
                                onChange={changeHandler}
                            ></InputItem>
                        </label>
                        <label>
                            <InputItem
                                placeholder="Password"
                                id="loginPassword"
                                className="auth__input"
                                type="password"
                                name="password"
                                onChange={changeHandler}
                            ></InputItem>
                        </label>

                        <ButtonItem
                            className="auth__btn hidden"
                            disabled={loading}
                        ><img src={arrowRight} alt="LogIn"/></ButtonItem>
                        <ButtonItem
                            className="auth__btn"
                            onClick={registerHandler}
                            disabled={loading}
                        ><img src={arrowRight} alt="Register" /></ButtonItem>
                    </div>
                </div>
                <div className="auth__forgot">Rotgot password?</div>
            </div>

        </div>
    );
}

export default AuthPage;