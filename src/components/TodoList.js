import React from 'react';
import TodoItem from './TodoItem';
import TodoItems from '../constants/ItemList';

class TodoList extends React.Component {
    constructor () {
        super();
        this.state = {
            todoTasks: TodoItems
        }
    }

    handleChange = (id) => {
        const newList= this.state.todoTasks.map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted
            }
            return item
        })
        this.setState({
            todoTasks: newList
        })
    }

    render () {
        return (
            <div className='list'>
                {this.state.todoTasks.map(item => <TodoItem
                    key={item.id}
                    handleChange={this.handleChange}
                    {...item}
                    />)}
                
            </div>
        )
    }
}
export default TodoList;
