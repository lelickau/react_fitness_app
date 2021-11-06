import React, { useState, useEffect } from 'react';
// import Loader from '../../components/loader/Loader';
import InputItem from '../../components/UI/inputs/InputItem';

import './createNote.scss';
import ButtonItem from '../../components/UI/buttons/ButtonItem';
import { createNote, updateEditNote, cleanEditNote } from '../../redux/actions/notes';
import { changeHidden, cleanIsError } from '../../redux/actions/global';
import { useDispatch, useSelector } from 'react-redux';

function CreateNote() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.global.isError);
    const editNote = useSelector(state => state.notes.editNote);

    const [task, setTask] = useState({
        title: '',
        description: '',
        marking: '',
        status: '',
    });

    const [activeMarking, setActiveMarking] = useState(1);
    const [activeStatus, setActiveStatus] = useState(1);
    const [markingValue, setMarkingValue] = useState('#57AE49');
    const [statusValue, setStatusValue] = useState('New');

    const cleanNoteStates = () => {
        setTask({
            title: '',
            description: '',
            marking: '',
            status: '',
        });
        setActiveMarking(1);
        setActiveStatus(1);
        setMarkingValue('#57AE49');
        setStatusValue('New');
    }

    useEffect(() => {
        if (editNote.length){
            setTask(editNote[0]);
            setMarkingValue(editNote[0].marking);
            setStatusValue(editNote[0].status);
            if (editNote[0].marking) setActiveMarking(7);
            if (editNote[0].status) setActiveStatus(4);
            if (editNote[0].marking === '#57AE49') setActiveMarking(1);
            if (editNote[0].marking === '#2B76BB') setActiveMarking(2);
            if (editNote[0].marking === '#FF7272') setActiveMarking(3);
            if (editNote[0].marking === '#FBF458') setActiveMarking(4);
            if (editNote[0].marking === '#CC79DA') setActiveMarking(5);
            if (editNote[0].marking === '#79F8E1') setActiveMarking(6);
            if (editNote[0].status === 'New') setActiveStatus(1);
            if (editNote[0].status === 'Discussed') setActiveStatus(2);
            if (editNote[0].status === 'Assigned') setActiveStatus(3);
        };
    }, [editNote]);

    const cancelCreateNote = (e) => {
        e.preventDefault();
        dispatch(changeHidden(true));
        dispatch(cleanIsError(null));
        dispatch(cleanEditNote());
        cleanNoteStates();
    }

    const changeHandler = e => {
        dispatch(cleanIsError(null));
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

    const checkingValue = (val) => {
        if (val.trim() === '') return false;
        return true
    }

    const createAndAddNote = (e) => {
        e.preventDefault();
        dispatch(createNote(task));
        if (checkingValue(task.title)) {
            dispatch(changeHidden(true));
            cleanNoteStates();
        }
    }

    const updateNote = (e) => {
        e.preventDefault();
        dispatch(updateEditNote(task, editNote[0]._id));
        if (checkingValue(task.title)) {
            dispatch(changeHidden(true));
            cleanNoteStates();
        }
    }

    return (
    <div className="create-note">
        <form
            className="create-note__form"
            onSubmit={e => e.preventDefault()}
        >
        <div className="create-note__btns">
            <button
                    className="create-note__cancel-btn"
                    onClick={cancelCreateNote}
            >Cancel</button>
            <div className={editNote.length ? 'hidden' : ""}>
                <ButtonItem
                    onClick={createAndAddNote}
            >Add</ButtonItem>
            </div>
            <div className={editNote.length ? '' : 'hidden'}>
                <ButtonItem
                    onClick={updateNote}
            >Edit</ButtonItem>
            </div>

        </div>
            <label className="create-note__label-task">Title {!error ? '' : `(${error})`}
            <InputItem
                className={`create-note__input-title ${!error ? '' : `create-note__label-title--error`}`}
                placeholder="add a title ..."
                type="text"
                name='title'
                value={task.title}
                onChange={changeHandler}
            />
            </label>
            <div className="create-note__items-box">
            <label className="create-note__label-task" >Description
            <textarea
                className="create-note__description"
                name="description"
                placeholder="add a description ..."
                value={task.description}
                onChange={changeHandler}
            ></textarea></label>


                <div className="create-note__mark">
                    <input
                        type="hidden"
                        name="marking"
                        value={task.marking = markingValue}
                        onChange={changeHandler}
                    ></input>
                    <div
                        className="create-note__label-task"
                        >Marking</div>
                    <ul className='create-note__mark-list'>
                            <li
                            onClick={(e) => showMarking(1, e.target.dataset.mark)}
                            className={`create-note__item-mark ${activeMarking === 1 ? 'create-note__item--active' : ""}`}
                            data-mark="#57AE49"
                            style={markStyle.green}
                            ></li>
                            <li
                            className={`create-note__item-mark ${activeMarking === 2 ? 'create-note__item--active' : ""}`}
                            data-mark="#2B76BB"
                            style={markStyle.blue}
                            onClick={(e) => showMarking(2, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`create-note__item-mark ${activeMarking === 3 ? 'create-note__item--active' : ""}`}
                            data-mark="#FF7272"
                            style={markStyle.red}
                            onClick={(e) => showMarking(3, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`create-note__item-mark ${activeMarking === 4 ? 'create-note__item--active' : ""}`}
                            onClick={(e) => showMarking(4, e.target.dataset.mark)}
                            data-mark="#FBF458"
                            style={markStyle.yellow}
                            ></li>
                            <li
                            className={`create-note__item-mark ${activeMarking === 5 ? 'create-note__item--active' : ""}`}
                            data-mark="#CC79DA"
                            style={markStyle.violet}
                            onClick={(e) => showMarking(5, e.target.dataset.mark)}
                            ></li>
                            <li
                            className={`create-note__item-mark ${activeMarking === 6 ? 'create-note__item--active' : ""}`}
                            data-mark="#79F8E1"
                            style={markStyle.turquoise}
                            onClick={(e) => showMarking(6, e.target.dataset.mark)}
                            ></li>
                            <li
                            className="create-note__item-mark-own"
                            > <input className={activeMarking === 7 ? 'create-note__item--active' : ""} type="color" onChange={(e) => showMarking(7, e.target.value)} /><span>Own</span> </li>
                    </ul>

                </div>
            </div>

                <div className="create-note__status">
                    <input
                        type="hidden"
                        name="status"
                        value={task.status = statusValue}
                        onChange={changeHandler}
                    ></input>
                    <div className="create-note__label-task" onClick={showStatus}>Status</div>
                    <ul className='create-note__status-list'>
                            <li
                            className={`create-note__item-status ${activeStatus === 1 ? 'create-note__item--active' : ""}`}
                            data-status="New"
                            onClick={(e) => showStatus(1, e.target.dataset.status)}
                            >New</li>
                            <li
                            className={`create-note__item-status ${activeStatus === 2 ? 'create-note__item--active' : ""}`}
                            data-status="Discussed"
                            onClick={(e) => showStatus(2, e.target.dataset.status)}
                            >Discussed</li>
                            <li
                            className={`create-note__item-status ${activeStatus === 3 ? 'create-note__item--active' : ""}`}
                            data-status="Assigned"
                            onClick={(e) => showStatus(3, e.target.dataset.status)}
                            >Assigned</li>
                            <li
                            className="create-note__item-status-own"
                            > <input className="create-note__input-status-own" value={task.status} placeholder="choose your own ..." type="text" onChange={(e) => showStatus(4, e.target.value)} /></li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default CreateNote;