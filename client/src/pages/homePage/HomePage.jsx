import React, { useContext } from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import ButtonItem from '../../components/UI/buttons/ButtonItem';

import './homePage.scss';
import Loader from '../../components/loader/Loader';

function HomePage() {
    const history = useHistory()
    const auth = useContext(AuthContext);

    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    }
    return (
        <div className="profile">
            <HeaderTitle>Profile</HeaderTitle>
            <article className="profile__content">
                <ButtonItem
                    onClick={logoutHandler}
                >Logout</ButtonItem>
                <Loader/>
            </article>
        </div>
    );
}

export default HomePage;