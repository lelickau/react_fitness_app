import React from 'react';

import settingsIco from '../../resources/icons/settTask.svg';
import './taskItem.scss';

//{id: 'a1', title: 'Связатся с МэриДжей', marking: 'green', status: 'In the process'}
function TaskItem({task, index}) {
    return (
        <div className="task">
            <div className="task__items">
                <div className="task__item-number">
                    {index+1}
                </div>
                <div className="task__item-name">{task.title}</div>
                <div className={`task__item-mark ${task.marking}`}></div>
                <div className="task__item-status">{task.status}</div>
            </div>
            <div className="task__item-settings">
                <a className="settings">
                    <img className="settings__ico" src={settingsIco} alt="Settings" />
                </a>
            </div>
        </div>
    );
}

export default TaskItem;