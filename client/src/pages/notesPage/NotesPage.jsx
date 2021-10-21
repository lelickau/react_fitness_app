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
import { createNote, getNotes } from '../../redux/actions/notes';
import { useDispatch, useSelector } from 'react-redux';
import CreateNote from '../../components/createNote/CreateNote';

function NotesPage() {
    const getAllNotes = useSelector(state => state.notes.notesList);
    // if (loading) {
    //     return <Loader/>
    // }

    return (
        <div className="notes">
            <HeaderTitle>Notes</HeaderTitle>
            <article className="notes__content container">
                <div className="notes__create-box hidden">
                    <CreateNote/>
                </div>

                <Notes tasks={getAllNotes} />
            </article>
        </div>
    );
}

export default NotesPage;