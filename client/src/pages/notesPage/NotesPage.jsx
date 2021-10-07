import React, { useState, useContext, useCallback, useEffect } from 'react';
import Notes from '../../components/notes/Notes';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';
import Loader from '../../components/loader/Loader';


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
            <HeaderTitle title={'Notes'} />
            <article className="notes__content container">
                <form
                    className="notes__form"
                    onSubmit={e => e.preventDefault()}
                    >
                    <input
                        className="notes__input"
                        type="text"
                        name='title'
                        value={task.title}
                        onChange={changeHandler}
                    />
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
                    <button
                        className="notes__btn"
                        onClick={createNote}
                    >Add</button>
                </form>
                {!loading && <Notes tasks={tasks} />}
            </article>
        </div>
    );
}

export default NotesPage;