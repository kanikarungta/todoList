import React from 'react';

function TodoItem (props) {
    return (
        <div className='task'>
            <input
                type='checkbox'
                name={props.id}
                checked={props.isCompleted === true}
                onChange={() => props.handleChange(props.id)}
            />
            <span className={props.isCompleted ? 'doneStyle' : null }>{props.todo}</span>
        </div>
    )
}
export default TodoItem;
