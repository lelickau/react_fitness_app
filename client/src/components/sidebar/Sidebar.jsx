import React from 'react';
import scaleIco from '../../resources/icons/scale.svg';
import waterIco from '../../resources/icons/water.svg';
import foodIco from '../../resources/icons/food.svg';
import notesIco from '../../resources/icons/tasks.svg';
import logoutIco from '../../resources/icons/logout.svg';
import profoleImg from '../../resources/img/profile-img.png';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

import "./sidebar.scss"
import ButtonItem from '../UI/buttons/ButtonItem';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <nav className="sidebar__menu">
                <ul className="sidebar__list">
                    <li className="sidebar__item sidebar__item-profile">
                        <NavLink to="/home" className="sidebar__link">
                            <img className="sidebar__link-img profile-img" alt="Scale" src={profoleImg} />
                            <span className="sidebar__link-title">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="sidebar__menu">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <NavLink to="/scale" className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Scale" src={scaleIco} />
                            <span className="sidebar__link-title">Scale</span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/water" className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Water" src={waterIco} />
                            <span className="sidebar__link-title">Water</span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/foods" className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Food" src={foodIco} />
                            <span className="sidebar__link-title">Food</span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/notes" className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Notes" src={notesIco} />
                            <span className="sidebar__link-title">Notes</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <ButtonItem
                className="sidebar__logout"
                    onClick={() => dispatch(logout())}
            >
            <img className="sidebar__logout-ico" src={logoutIco} alt="logout" />
            Log Out</ButtonItem>
        </div>
    );
}

export default Sidebar;
