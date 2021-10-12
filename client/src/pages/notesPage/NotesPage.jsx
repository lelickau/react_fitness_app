import React, { useState, useContext, useCallback, useEffect } from 'react';
import Notes from '../../components/notes/Notes';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';
import Loader from '../../components/loader/Loader';
import InputItem from '../../components/UI/inputs/InputItem';

import './notesPage.scss';
import ButtonItem from '../../components/UI/buttons/ButtonItem';

function NotesPage() {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [task, setTask] = useState({
        title: '',
        marking: '',
        status: '',
    });
    const [activeMarking, setActiveMarking] = useState(false);
    const [activeStatus, setActiveStatus] = useState(false);
    const [markingValue, setMarkingValue] = useState('green');
    const [statusValue, setStatusValue] = useState('Assigned');

    const [tasks, setTasks] = useState([])

    const changeHandler = e => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const getNotes = useCallback(async () => {
        try {
            const data = await request('/api/notes', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            });
            console.log(data)
            setTasks(data)
        } catch (err) {}
    }, [auth, request]);

    useEffect(() => {
        getNotes()
    }, [getNotes]);

    const createNote = async () => {
        try {
            const data = await request('/api/notes/create', 'POST', {...task}, {
                Authorization: `Bearer ${auth.token}`
            });
            console.log(data)
            history.push(`/notes/${data._id}`);
            setTask({
                title: '',
                marking: '',
                status: '',
            });
        } catch (err) {console.log(err)}
    }

    const showMarking = (e) => {
        setActiveMarking(!activeMarking);
    }
    const showStatus = (e) => {
        setActiveStatus(!activeStatus);
    }

    const changeMarkingValue = (e) => {
        setMarkingValue(e.target.dataset.mark);
    }
    const changeStatusValue = (e) => {
        setStatusValue(e.target.dataset.status);
    }

    if (loading) {
        return <Loader/>
    }
    console.log(markingValue)
    return (
        <div className="notes">
            <HeaderTitle>Notes</HeaderTitle>
            <article className="notes__content container">
                <form
                    className="notes__form"
                    onSubmit={e => e.preventDefault()}
                    >
                    <label className="notes__label-task">Task descpiption
                    <InputItem
                        placeholder="Feed the dog"
                        type="text"
                        name='title'
                        value={task.title}
                        onChange={changeHandler}
                    />
                    </label>
                    <div className="notes__mark">
                        <input
                            type="hidden"
                            name="marking"
                            value={task.marking = markingValue}
                        ></input>
                        <div className="notes__head-mark" onClick={showMarking}>Choose a marking &#9660;</div>
                        <ul className={`notes__mark-list ${activeMarking ? '' : 'hidden'} `}>
                            <li
                            onClick={changeMarkingValue}
                            className="notes__item-mark notes__item-red"
                            data-mark="red"
                            ></li>
                            <li
                            className="notes__item-mark notes__item-blue"
                            data-mark="blue"
                            onClick={changeMarkingValue}
                            ></li>
                            <li
                            className="notes__item-mark notes__item-green"
                            data-mark="green"
                            onClick={changeMarkingValue}
                            ></li>
                        </ul>
                    </div>
                    <div className="notes__status">
                        <input
                            type="hidden"
                            name="status"
                            value={task.status = statusValue}
                        ></input>
                        <div className="notes__head-status" onClick={showStatus}>Choose a status &#9660;</div>
                        <ul className={`notes__status-list ${activeStatus ? '' : 'hidden'} `}>
                            <li
                            onClick={changeStatusValue}
                            className="notes__item-status"
                            data-status="Assigned"
                            >Assigned</li>
                            <li
                            className="notes__item-status"
                            data-status="Completed"
                            onClick={changeStatusValue}
                            >Completed</li>
                            <li
                            className="notes__item-status"
                            data-status="Closed"
                            onClick={changeStatusValue}
                            >Closed</li>
                            <li
                            className="notes__item-status"
                            data-status="Assigned"
                            onClick={changeStatusValue}
                            >Assigned</li>
                        </ul>
                    </div>


                    <ButtonItem
                        onClick={createNote}
                    >Add</ButtonItem>
                </form>
                {!loading && <Notes tasks={tasks} />}
            </article>
        </div>
    );
}

export default NotesPage;