import React, {useState, useEffect} from 'react';
import { registration, login } from '../../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';

import './authPage.scss';
import showPass from '../../resources/icons/show-pass.svg'
import hidePass from '../../resources/icons/hide-pass.svg'
import { useHistory } from 'react-router';

function AuthPage() {
    const history = useHistory();
    const isError = useSelector(state => state.user.isError);
    const isSuccess = useSelector(state => state.global.isSuccess);

    const [visiblePass, setVisiblePass] = useState(false);
    const [form, setForm] = useState({
        email: '', password: ''
    });
    const [active, setActive] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passDirty, setPassDirty] = useState(false);
    const [emailErr, setEmailErr] = useState('Please enter an email address.');
    const [passErr, setPassErr] = useState('Please enter a password.');
    const [formValid, setFormValid] = useState(false)
    const dispatch = useDispatch();

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPassDirty(true)
                break
            default:
                return;
        }
    }

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value});

        if (e.target.name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(e.target.value).toLowerCase())) {
                setEmailErr('Please check the email address entered')
            } else {
                setEmailErr('')
            }
        }
        if (e.target.name === 'password') {
            if (e.target.value.length < 6) {
                setPassErr('The password is too short. Please enter at least 6 characters.')
                if (!e.target.value) {
                    setPassErr('Please enter a password.')
                }
            } else {
                setPassErr('')
            }
        }
    }

    const toggleShow = (e) => {
        setVisiblePass(!visiblePass)
    }

    useEffect(() => {
        if (emailErr || passErr) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailErr, passErr])

    const changeActive = () => {
        setActive(!active)
    }

    const recoverPassword = (e) => {
        history.push('forget')
    }

    const singUp = (e) => {
        dispatch(registration(form));
    }

    return (
        <div className="auth">
        <div className="auth__error">
            {isError}
        </div>
            <form onSubmit={e => e.preventDefault()} className="auth__form">
                <div className="auth__form-box">
                    <div className="auth__tabs">
                        <div
                            className={`auth__tab ${active ? '' : "hidden"} `}
                            onClick={changeActive}
                        >Log in</div>
                        <div
                            className={`auth__tab ${!active ? '' : "hidden"} `}
                            onClick={changeActive}
                        >Sing up</div>
                    </div>

                    <div className="auth__form">
                        <h1 className={`auth__title ${!active ? '' : "hidden"} `}>Log in</h1>
                        <h1 className={`auth__title ${active ? '' : "hidden"} `}>Sing up</h1>
                        <div className="auth__inputs">
                            <label>
                        {(emailDirty && emailErr) && <span className="auth__err-valid">{emailErr}</span>}
                                <input
                                    autoComplete="username"
                                    placeholder="Email"
                                    id="loginEmail"
                                    type="text"
                                    className="auth__input"
                                    name="email"
                                    value={form.email}
                                    onChange={changeHandler}
                                    onBlur={(e) => blurHandler(e)}
                                ></input>
                            </label>
                            <label>
                            <div className="auth__pass-box">
                                <input
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    id="loginPassword"
                                    className="auth__input auth__input-bottom"
                                    type={visiblePass ? "text" : "password"}
                                    name="password"
                                    value={form.password}
                                    onChange={changeHandler}
                                    onBlur={(e) => blurHandler(e)}
                                />
                                <div className="auth__show-pass" onClick={toggleShow}>
                                    <img className="auth__show-pass-ico" src={visiblePass ? hidePass : showPass} alt="Show/Hide" />
                                </div>
                            </div>
                            {(passDirty && passErr) && <span className="auth__err-valid">{passErr}</span>}
                            </label>

                            <button
                                className={`auth__btn ${!active ? '' : "hidden"}`}
                                onClick={() => dispatch(login(form))}
                                disabled={!formValid}
                            ><span className="auth__btn-arrow"></span></button>
                            <button
                                className={`auth__btn ${active ? '' : "hidden"}`}
                                onClick={singUp}
                                disabled={!formValid}
                            ><span className="auth__btn-arrow"></span></button>
                        </div>
                    </div>
                    <div
                        onClick={recoverPassword}
                        className="auth__forgot"
                    >Forgot Password?</div>
                </div>
            </form>
        </div>
    );
}

export default AuthPage;