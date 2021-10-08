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

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="notes">
            <HeaderTitle>Notes</HeaderTitle>
            <article className="notes__content container">
                <form
                    className="notes__form"
                    onSubmit={e => e.preventDefault()}
                    >
                    <InputItem
                        placeholder="Task description"
                        type="text"
                        name='title'
                        value={task.title}
                        onChange={changeHandler}
                    />
                    <div className="notes">
                        <input type="hidden" name="marking"></input>
                        <div className="select__head">Choose a marking</div>
                        <ul className="select__list">
                            <li className="notes__item-red" value="red"></li>
                            <li className="notes__item-blue" value="blue"></li>
                            <li className="notes__item-green" value="green"></li>
                        </ul>
                    </div>

                    <select
                        className="notes__mark"
                        name="marking"
                        value={task.marking}
                        onChange={changeHandler}
                    >
                        <option className="notes__green">Marking</option>
                        <option className="notes__green" value="green">green</option>
                        <option className="notes__red" value="red">red</option>
                        <option className="notes__blue" value="blue">blue</option>
                    </select>
                    <select
                        className="notes__status"
                        name="status"
                        value={task.status}
                        onChange={changeHandler}
                    >
                        <option className="notes__green">Status</option>
                        <option className="notes__green" value="Assigned">Assigned</option>
                        <option className="notes__red" value="Completed">Completed</option>
                        <option className="notes__blue" value="Closed">Closed</option>
                        <option className="notes__blue" value="Closed">Assigned</option>
                    </select>
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