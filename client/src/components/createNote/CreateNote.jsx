import React, { useState } from 'react';
// import Loader from '../../components/loader/Loader';
import InputItem from '../../components/UI/inputs/InputItem';

import './createNote.scss';
import ButtonItem from '../../components/UI/buttons/ButtonItem';
import { changeHidden, createNote, cleanIsError } from '../../redux/actions/notes';
import { useDispatch, useSelector } from 'react-redux';



function CreateNote() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.notes.isError);

    const [task, setTask] = useState({
        title: '',
        description: '',
        marking: '',
        status: '',
    });

    const cancelCreateNote = (e) => {
        e.preventDefault();
        dispatch(changeHidden(true));
        dispatch(cleanIsError(null));
        setTask({
            title: '',
            description: '',
            marking: '',
            status: '',
        })
    }

    const [activeMarking, setActiveMarking] = useState(3);
    const [activeStatus, setActiveStatus] = useState(3);
    const [markingValue, setMarkingValue] = useState('green');
    const [statusValue, setStatusValue] = useState('Assigned');

    const changeHandler = e => {
        dispatch(cleanIsError(null));
        setTask({...task, [e.target.name]: e.target.value.trim()});
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

    const createAndAddNote = async (e) => {
        e.preventDefault();
        const promise = await dispatch(createNote(task));
        if (promise && !error) {
            dispatch(changeHidden(true));
        }
    }

    return (
    <div className="note">
        <form
            className="note__form"
            onSubmit={e => e.preventDefault()}
        >
        <div className="note__btns">
            <button
                    className="note__cancel-btn"
                    onClick={cancelCreateNote}
            >Cancel</button>
            <ButtonItem
                    onClick={createAndAddNote}
            >Add</ButtonItem>
        </div>
            <label className="note__label-task">Title {!error ? '' : `(${error})`}
            <InputItem
                className={`note__input-title ${!error ? '' : `note__label-title--error`}`}
                placeholder="add a title ..."
                type="text"
                name='title'
                value={task.title}
                onChange={changeHandler}
            />
            </label>
            <div className="note__items-box">
            <label className="note__label-task" >Description
            <textarea
                className="note__description"
                name="description"
                placeholder="add a description ..."
                value={task.description}
                onChange={changeHandler}
            ></textarea></label>


                <div className="note__mark">
                    <input
                        type="hidden"
                        name="marking"
                        value={task.marking = markingValue}
                        onChange={changeHandler}
                    ></input>
                    <div
                        className="note__label-task"
                        >Marking</div>
                    <ul className='note__mark-list'>
                            <li
                            onClick={(e) => showMarking(1, e.target.dataset.mark)}
                            className={`note__item-mark ${activeMarking === 1 ? 'note__item--active' : ""}`}
                            data-mark="#FF7272"
                            style={markStyle.red}
                            ></li>
                            <li
                            className={`note__item-mark ${activeMarking === 2 ? 'note__item--active' : ""}`}
                            data-mark="#2B76BB"
                            style={markStyle.blue}
                            onClick={(e) => showMarking(2, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`note__item-mark ${activeMarking === 3 ? 'note__item--active' : ""}`}
                            data-mark="#57AE49"
                            style={markStyle.green}
                            onClick={(e) => showMarking(3, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`note__item-mark ${activeMarking === 4 ? 'note__item--active' : ""}`}
                            onClick={(e) => showMarking(4, e.target.dataset.mark)}
                            data-mark="#FBF458"
                            style={markStyle.yellow}
                            ></li>
                            <li
                            className={`note__item-mark ${activeMarking === 5 ? 'note__item--active' : ""}`}
                            data-mark="#CC79DA"
                            style={markStyle.violet}
                            onClick={(e) => showMarking(5, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`note__item-mark ${activeMarking === 6 ? 'note__item--active' : ""}`}
                            data-mark="#79F8E1"
                            style={markStyle.turquoise}
                            onClick={(e) => showMarking(6, e.target.dataset.mark)}
                            ></li>
                            <li
                            className="note__item-mark-own"
                            > <input className={activeMarking === 7 ? 'note__item--active' : ""} type="color" onChange={(e) => showMarking(7, e.target.value)} /><span>Choose your own</span> </li>
                    </ul>

                </div>
            </div>

                <div className="note__status">
                    <input
                        type="hidden"
                        name="status"
                        value={task.status = statusValue}
                        onChange={changeHandler}
                    ></input>
                    <div className="note__label-task" onClick={showStatus}>Status</div>
                    <ul className='note__status-list'>
                            <li
                            className={`note__item-status ${activeStatus === 1 ? 'note__item--active' : ""}`}
                            data-status="Completed"
                            onClick={(e) => showStatus(1, e.target.dataset.status)}
                            >Completed</li>
                            <li
                            className={`note__item-status ${activeStatus === 2 ? 'note__item--active' : ""}`}
                            data-status="Closed"
                            onClick={(e) => showStatus(2, e.target.dataset.status)}
                            >Closed</li>
                            <li
                            className={`note__item-status ${activeStatus === 3 ? 'note__item--active' : ""}`}
                            data-status="Assigned"
                            onClick={(e) => showStatus(3, e.target.dataset.status)}
                            >Assigned</li>
                            <li
                            className="note__item-status-own"
                            > <input className="note__input-status-own" placeholder="choose your own ..." type="text" onChange={(e) => showStatus(null, e.target.value)} /></li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default CreateNote;