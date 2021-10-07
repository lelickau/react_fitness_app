import React from 'react';
import scaleIco from '../../resources/icons/scales.svg';
import waterIco from '../../resources/icons/wather.svg';
import foodIco from '../../resources/icons/fork.svg';
import notesIco from '../../resources/icons/tasks.svg';
import profoleImg from '../../resources/img/profile-img.png';
import { NavLink } from 'react-router-dom';

import "./sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
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
                        <NavLink to="/food" className="sidebar__link">
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
            <nav className="sidebar__menu">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <NavLink to="/home" className="sidebar__link">
                            <img className="sidebar__link-icon profile-img" alt="Scale" src={profoleImg} />
                            <span className="sidebar__link-title">Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
