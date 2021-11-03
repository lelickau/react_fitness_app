import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteFile, editNote } from '../../redux/actions/notes';
import ButtonItem from '../UI/buttons/ButtonItem';
import {useHistory} from 'react-router-dom'

import deleteIco from '../../resources/icons/delete.svg';
import editIco from '../../resources/icons/edit.svg';
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
        dispatch(editNote(task));
        history.push(`/notes/edit/${task._id}`)
    }

    const dateNote = task.date.split('T');
    const dateCreateNote = dateNote[0].split('-').reverse().join('.');


    return (
        <div className="task">
                <div className='task__item-mark' style={{background: task.marking}}></div>
            <div className="task__items">
                <div className="task__item-box">
                <div className="task__item-number">{index+1}</div>
                    <div className="task__items-text">
                        <div className="task__item-name">{dateCreateNote}</div>
                        <div className="task__item-name">{task.title}</div>
                        <div className="task__item-description">{task.description}</div>
                        <div className="task__status-box">
                            <div className="task__item-status">{task.status}</div>

                        </div>
                    </div>
                    <div className="task__item-settings">

            </div>
                </div>
                <div className="settings">
                    <ButtonItem
                        onClick={deleteClickHandler}
                        className="settings__btn settings__btn-del"
                    ><img className="settings__btn-ico" src={deleteIco} alt="delete"/></ButtonItem>
                    <ButtonItem
                        onClick={editClickHandler}
                        className="settings__btn settings__btn-edit"
                    ><img className="settings__btn-ico" src={editIco} alt="edit"/></ButtonItem>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;