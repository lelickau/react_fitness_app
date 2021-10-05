import React from 'react';
import scaleIco from '../../resources/icons/scales.svg';
import waterIco from '../../resources/icons/wather.svg';
import foodIco from '../../resources/icons/fork.svg';
import notesIco from '../../resources/icons/tasks.svg';
import settingsIco from '../../resources/icons/settings.svg';
import profoleImg from '../../resources/img/profile-img.png';

import "./sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
            <nav className="sidebar__menu">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Scale" src={scaleIco} />
                            <span className="sidebar__link-title">Scale</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Water" src={waterIco} />
                            <span className="sidebar__link-title">Water</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Food" src={foodIco} />
                            <span className="sidebar__link-title">Food</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Notes" src={notesIco} />
                            <span className="sidebar__link-title">Notes</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="sidebar__menu">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a className="sidebar__link">
                            <img className="sidebar__link-icon profile-img" alt="Scale" src={profoleImg} />
                            <span className="sidebar__link-title">Profile</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link">
                            <img className="sidebar__link-icon" alt="Water" src={settingsIco} />
                            <span className="sidebar__link-title">Water</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
