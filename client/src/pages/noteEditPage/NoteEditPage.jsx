import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/loader/Loader';
import TaskItem from '../../components/taskItem/TaskItem';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook';

function NoteEditPage(props) {
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [note, setNote] = useState(null);
    const noteId = useParams().id;

    const getNote = useCallback(async () => {
        try {
            const data = await request(`/api/notes/${noteId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });

            setNote(data);
        } catch (err) {}
    }, [noteId, request, token]);

    useEffect(() => {
        getNote()
    }, [getNote]);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && note && <TaskItem task={note} index="1"/>}
        </>
    );
}

export default NoteEditPage;