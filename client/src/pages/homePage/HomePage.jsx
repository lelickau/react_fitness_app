import React from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAvatar, uploadAvatar } from '../../redux/actions/user';
import {SERVER_URL} from '../../env.js';

import editBtn from '../../resources/icons/edit-pen.svg';
import defaultAvatar from '../../resources/img/profile-img.png';
import './homePage.scss';
import { NavLink } from 'react-router-dom';

function HomePage() {
    const user = useSelector(state => state.user.currentUser);
    const {notesList} = useSelector(state => state.notes);
    const {favoritList} = useSelector(state => state.foods);
    const avatar = user.avatar ? `${SERVER_URL + user.avatar}` : defaultAvatar;
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        if (user.avatar) {
            dispatch(deleteAvatar());
        }
        const file = e.target.files[0];
        dispatch(uploadAvatar(file));
    }
    return (
        <div className="profile">
            <HeaderTitle>Profile</HeaderTitle>
            <article className="profile__content container">
                <div className="profile__box">
                    <label className="profile__edit">
                        <input className="profile__input-file" accept="image/*" onChange={changeHandler} type="file" />
                        <img src={editBtn} alt="edit" />
                    </label>
                    <div className="profile__ava-box">
                        <img className="profile__ava" src={avatar} alt="User" />
                    </div>
                    <h1 className="profile__email">{user.email}</h1>
                </div>
                <div className="profile__info">
                    <div className="profile__info-box">
                        <h3 className="profile__title">My Notes</h3>
                        {
                            notesList.length ?
                            notesList.map(note =>
                                <div className="profile__item">
                                    <h5 className="profile__item-title">{note.title}</h5>
                                    <span className="profile__item-status">{note.status}</span>
                                </div>
                            )
                            :
                            <h5 className="profile__empty">The note list is empty</h5>
                        }
                        <NavLink to="/notes" className="profile__item-link">Go to My notes</NavLink>
                    </div>
                    <div className="profile__info-box">
                        <h3 className="profile__title">My Favs</h3>
                        {
                            favoritList.length ?
                            favoritList.map(fav =>
                                <div className="profile__item">
                                    <h5 className="profile__item-title">{fav.label}</h5>
                                </div>
                            )
                            :
                            <h5 className="profile__empty">The note list is empty</h5>
                        }
                        <NavLink to="/foods" className="profile__item-link">Go to My favs</NavLink>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default HomePage;