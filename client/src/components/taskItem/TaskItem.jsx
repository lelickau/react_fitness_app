import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteFile } from '../../redux/actions/notes';

import settingsIco from '../../resources/icons/settTask.svg';
import './taskItem.scss';

function TaskItem({task, index}) {
    const dispatch = useDispatch();

    function deleteClickHandler(e) {
        e.stopPropagation();
        dispatch(deleteFile(task));
    }

    const [activeStatus, setActiveStatus] = useState(false);
    const showBtns = (e) => {
            setActiveStatus(!activeStatus);
    }

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
            {/* link */}

                <div className="settings">
                        <div className={`settings__head-status ${!activeStatus ? '' : 'hidden'}`} onClick={showBtns}>
                            <img className="settings__ico" src={settingsIco} alt="Settings" />
                        </div>
                        <ul className={`settings__status-list ${activeStatus ? '' : 'hidden'} `}>
                            <li
                            onClick={(e) => deleteClickHandler(e)}
                            className="settings__item-status"
                            >Delete</li>
                            <li
                            // onClick={(e) => editClickHandler(e)}
                            className="settings__item-status"
                            >Edit</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default TaskItem;