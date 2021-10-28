import React, {useEffect} from 'react';
import Notes from '../../components/notes/Notes';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import PlusElem from '../../components/UI/elems/PlusMinusElem';
import ButtonItem from '../../components/UI/buttons/ButtonItem';
import { changeHidden, getNotes } from '../../redux/actions/notes';
import { useDispatch, useSelector } from 'react-redux';
import CreateNote from '../../components/createNote/CreateNote';

import plusIco from '../../resources/icons/addTask.svg';
import './notesPage.scss';

function NotesPage() {
    const dispatch = useDispatch();
    const getAllNotes = useSelector(state => state.notes.notesList);
    const hiddenCreate = useSelector(state => state.notes.hiddenCreate);

    const showCreateNote = (e) => {
        e.preventDefault();
        dispatch(changeHidden(false))
    }

    useEffect(() => {
        dispatch(getNotes())
    }, [dispatch]);

    return (
        <div className="notes">
            <HeaderTitle>Notes</HeaderTitle>
            <article className="notes__content container">
                <div className={`notes__create-box ${hiddenCreate ? "hidden" : ""}`}>
                    <CreateNote/>
                </div>
                <ButtonItem className="notes__btn" onClick={showCreateNote}>
                    <div className="notes__btn-create">
                        <PlusElem src={plusIco}/>
                    </div>
                    <span className="notes__btn-text">Add a task</span>
                </ButtonItem>
                <Notes tasks={getAllNotes}/>
            </article>
        </div>
    );
}

export default NotesPage;