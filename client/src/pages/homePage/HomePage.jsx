import React, { useContext } from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import ButtonItem from '../../components/UI/buttons/ButtonItem';

import './homePage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

function HomePage() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    // const history = useHistory()
    // const auth = useContext(AuthContext);

    return (
        <div className="profile">
            <HeaderTitle>Profile</HeaderTitle>
            <article className="profile__content">
                <ButtonItem
                    onClick={() => dispatch(logout())}
                >Logout</ButtonItem>
            </article>
        </div>
    );
}

export default HomePage;