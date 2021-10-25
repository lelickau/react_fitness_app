import React, {useState} from 'react';
import { registration, login } from '../../redux/actions/user';
import {useDispatch} from 'react-redux';

import './authPage.scss';

function AuthPage() {
    // const auth = useContext(AuthContext);
    // const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    });
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();


    // // error ?
    // const showError = (text) => {
    //     console.log(text)
    // }

    // useEffect(() => {
    //     showError(error);
    //     clearError()
    // }, [error, clearError])

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const changeActive = () => {
        setActive(!active)
    }

    return (
        <div className="auth">
            <form onSubmit={e => e.preventDefault()} className="auth__form">
                <div className="auth__form-box">
                    <div className="auth__tabs">
                        <div
                            className={`auth__tab ${active ? '' : "hidden"} `}
                            onClick={changeActive}
                        >Login</div>
                        <div
                            className={`auth__tab ${!active ? '' : "hidden"} `}
                            onClick={changeActive}
                        >Register</div>
                    </div>

                    <div className="auth__form">
                        <h1 className={`auth__title ${!active ? '' : "hidden"} `}>Login</h1>
                        <h1 className={`auth__title ${active ? '' : "hidden"} `}>Register</h1>
                        <div className="auth__inputs">
                            <label>
                                <input
                                    autoComplete="username"
                                    placeholder="Email"
                                    id="loginEmail"
                                    type="text"
                                    className="auth__input"
                                    name="email"
                                    value={form.email}
                                    onChange={changeHandler}
                                ></input>
                            </label>
                            <label>
                                <input
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    id="loginPassword"
                                    className="auth__input auth__input-bottom"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={changeHandler}
                                ></input>
                            </label>

                            <button
                                className={`auth__btn ${!active ? '' : "hidden"}`}
                                onClick={() => dispatch(login(form))}
                                // disabled={loading}
                            ><span className="auth__btn-arrow"></span></button>
                            <button
                                className={`auth__btn ${active ? '' : "hidden"}`}
                                onClick={() => registration(form)}
                                // disabled={loading}
                            ><span className="auth__btn-arrow"></span></button>
                        </div>
                    </div>
                    <div className="auth__forgot">Forgot Password?</div>
                </div>
            </form>
        </div>
    );
}

export default AuthPage;