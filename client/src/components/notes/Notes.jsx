import React from 'react';
import TaskItem from '../taskItem/TaskItem';

import './notes.scss';

function Notes({tasks}) {

    return (
        <div className="notes">
            <h2 className="notes__title">Task List</h2>
            <div className="notes__box-items">
                {!tasks.length
                ? <h2 className="notes__empty">The note list is empty</h2>
                : tasks.map((item, index) => <TaskItem task={item} index={index} key={item.id} />)
                }

            </div>

        </div>
    );
}

export default Notes;