import React, { useState, useEffect } from 'react';
// import Loader from '../../components/loader/Loader';
import InputItem from '../UI/inputs/InputItem';

import './editNote.scss';
import ButtonItem from '../UI/buttons/ButtonItem';
import { updateEditNote } from '../../redux/actions/notes';
import { useSelector } from 'react-redux';
import HeaderTitle from '../headerTitle/HeaderTitle';
import { useHistory } from 'react-router';

function EditNote() {
    const taskEdit = useSelector(state => state.notes.editNote[0])

    const history = useHistory();

    useEffect(() => {
        if (!taskEdit) {
            history.push(`/notes`);
        }
    }, [taskEdit, history]);

    const [task, setTask] = useState({
        title: taskEdit ? taskEdit.title : "",
        description: taskEdit ? taskEdit.description : "",
        marking: taskEdit ? taskEdit.marking : "",
        status: taskEdit ? taskEdit.status : "",
    });

    const cancelCreateNote = (e) => {
        e.preventDefault();
        history.push(`/notes`);
    }

    const [activeMarking, setActiveMarking] = useState(3);
    const [activeStatus, setActiveStatus] = useState(3);
    const [markingValue, setMarkingValue] = useState('green');
    const [statusValue, setStatusValue] = useState('Assigned');

    const changeHandler = e => {
        setTask({...task, [e.target.name]: e.target.value});
    }
    const showMarking = (idx, val) => {
        setActiveMarking(idx);
        changeMarkingValue(val);
    }

    const changeMarkingValue = (value) => {
        setMarkingValue(value);
    }

    const showStatus = (idx, val) => {
        setActiveStatus(idx);
        changeStatusValue(val)
    }

    const changeStatusValue = (value) => {
        setStatusValue(value);
    }
    const markStyle = {
        red: {background: `#FF7272`},
        blue: {background: `#2B76BB`},
        green: {background: `#57AE49`},
        yellow: {background: `#FBF458`},
        violet: {background: `#CC79DA`},
        turquoise: {background: `#79F8E1`},
    };

    return (
    <div className="edit ">
    <HeaderTitle>Edit</HeaderTitle>
    <article className="edit__content container">
            <form
            className="edit__form"
            onSubmit={e => e.preventDefault()}
        >
        <div className="edit__btns">
            <button
                    className="edit__cancel-btn"
                    onClick={cancelCreateNote}
            >Cancel</button>
            <ButtonItem
                    onClick={() => updateEditNote(task, taskEdit._id)}
            >Update</ButtonItem>
        </div>

            <label className="edit__label-task">Title
            <InputItem
                className="edit__input-title"
                placeholder="add a title ..."
                type="text"
                name='title'
                value={task.title}
                onChange={changeHandler}
            />
            </label>
            <div className="edit__items-box">
            <label className="edit__label-task" >Description
            <textarea
                className="edit__description"
                name="description"
                placeholder="add a description ..."
                value={task.description}
                onChange={changeHandler}
            ></textarea></label>


                <div className="edit__mark">
                    <input
                        type="hidden"
                        name="marking"
                        value={task.marking = markingValue}
                        onChange={changeHandler}
                    ></input>
                    <div
                        className="edit__label-task"
                        >Marking</div>
                    <ul className='edit__mark-list'>
                            <li
                            onClick={(e) => showMarking(1, e.target.dataset.mark)}
                            className={`edit__item-mark ${activeMarking === 1 ? 'edit__item--active' : ""}`}
                            data-mark="#FF7272"
                            style={markStyle.red}
                            ></li>
                            <li
                            className={`edit__item-mark ${activeMarking === 2 ? 'edit__item--active' : ""}`}
                            data-mark="#2B76BB"
                            style={markStyle.blue}
                            onClick={(e) => showMarking(2, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`edit__item-mark ${activeMarking === 3 ? 'edit__item--active' : ""}`}
                            data-mark="#57AE49"
                            style={markStyle.green}
                            onClick={(e) => showMarking(3, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`edit__item-mark ${activeMarking === 4 ? 'edit__item--active' : ""}`}
                            onClick={(e) => showMarking(4, e.target.dataset.mark)}
                            data-mark="#FBF458"
                            style={markStyle.yellow}
                            ></li>
                            <li
                            className={`edit__item-mark ${activeMarking === 5 ? 'edit__item--active' : ""}`}
                            data-mark="#CC79DA"
                            style={markStyle.violet}
                            onClick={(e) => showMarking(5, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`edit__item-mark ${activeMarking === 6 ? 'edit__item--active' : ""}`}
                            data-mark="#79F8E1"
                            style={markStyle.turquoise}
                            onClick={(e) => showMarking(6, e.target.dataset.mark)}
                            ></li>
                            <li
                            className="edit__item-mark-own"
                            > <input type="color" onChange={(e) => showMarking(null, e.target.value)} /><span>Choose your own</span> </li>
                    </ul>

                </div>
            </div>

                <div className="edit__status">
                    <input
                        type="hidden"
                        name="status"
                        value={task.status = statusValue}
                        onChange={changeHandler}
                    ></input>
                    <div className="edit__label-task" onClick={showStatus}>Status</div>
                    <ul className='edit__status-list'>
                            <li
                            className={`edit__item-status ${activeStatus === 1 ? 'edit__item--active' : ""}`}
                            data-status="Completed"
                            onClick={(e) => showStatus(1, e.target.dataset.status)}
                            >Completed</li>
                            <li
                            className={`edit__item-status ${activeStatus === 2 ? 'edit__item--active' : ""}`}
                            data-status="Closed"
                            onClick={(e) => showStatus(2, e.target.dataset.status)}
                            >Closed</li>
                            <li
                            className={`edit__item-status ${activeStatus === 3 ? 'edit__item--active' : ""}`}
                            data-status="Assigned"
                            onClick={(e) => showStatus(3, e.target.dataset.status)}
                            >Assigned</li>
                            <li
                            className="edit__item-status-own"
                            > <input className="edit__input-status-own" value={task.status} placeholder="choose your own ..." type="text" onChange={(e) => showStatus(null, e.target.value)} /></li>
                    </ul>
                </div>
            </form>
        </article>

        </div>
    );
}

export default EditNote;