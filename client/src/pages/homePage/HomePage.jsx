import React, { useContext } from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import Sidebar from '../../components/sidebar/Sidebar';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import './homePage.scss';

function HomePage(props) {
    const history = useHistory()
    const auth = useContext(AuthContext);

    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    }
    return (
        <div className="profile">
            <HeaderTitle title={'Profile'} />
            <article className="profile__content">
                <a
                    className="profile__logout"
                    href="/"
                    onClick={logoutHandler}
                >Logout</a>
            </article>
        </div>
    );
}

export default HomePage;