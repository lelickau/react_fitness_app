import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteFile, editNote } from '../../redux/actions/notes';

import settingsIco from '../../resources/icons/settTask.svg';

import {useHistory} from 'react-router-dom'
import './taskItem.scss';

function TaskItem({task, index}) {
    const dispatch = useDispatch();
    const history = useHistory()

    const deleteClickHandler = (e) => {
        e.stopPropagation();
        dispatch(deleteFile(task));
    }
    const editClickHandler = (e) => {
        e.stopPropagation();
        //console.log(task);
        dispatch(editNote(task));
        history.push(`/notes/edit/${task._id}`)
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
                <div className='task__item-mark' style={{background: task.marking}}></div>
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
                            onClick={deleteClickHandler}
                            className="settings__item-status"
                            >Delete</li>
                            <li
                            onClick={editClickHandler}
                            className="settings__item-status"
                            >Edit</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default TaskItem;