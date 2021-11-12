import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ButtonItem from '../../components/UI/buttons/ButtonItem';
import InputItem from '../../components/UI/inputs/InputItem';
import { reset } from '../../redux/actions/user';
import { setIsError } from '../../redux/actions/global';

import './recoverPassword.scss';

function RecoverPage() {
    const error = useSelector(state => state.global.isError);
    const success = useSelector(state => state.global.isSuccess);
    const history = useHistory();
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState({email: ''});

    const changeHandler = (e) => {
        setUserEmail({...userEmail, [e.target.name]: e.target.value});
        if (e.target.name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(e.target.value).toLowerCase())) {
                dispatch(setIsError('Please check the email address entered'));
            } else {
                dispatch(setIsError(false));
            }
        }
    }

    const backToAutorization = (e) => {
        history.push('autorization')
    }

    const resetPassword = (e) => {
        dispatch(reset(userEmail));
    }

    return (
    <div className="recover">
        <form onSubmit={e => e.preventDefault()} className="recover__form">
        <div className={error ? "error" : "hidden"}>{error}</div>
        <div className={success ? "success" : "hidden"}>Chack email {success} to recover your password</div>
        <button onClick={backToAutorization} className="recover__back">Back to log-in</button>
        <h1 className="recover__form-title">Reset password</h1>
            <div className="recover__pass-box">
                <InputItem
                    autoComplete="username"
                    placeholder="Email"
                    id="loginEmail"
                    type="text"
                    //className="recover__input"
                    name="email"
                    value={userEmail.email}
                    onChange={changeHandler}
                    //onBlur={(e) => blurHandler(e)}
                />
            </div>

            <ButtonItem
                //className="recover__btn"
                onClick={resetPassword}
            >Send</ButtonItem>
        </form>
    </div>
    );
}

export default RecoverPage;