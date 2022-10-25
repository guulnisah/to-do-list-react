import { nanoid } from 'nanoid';
import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    render() {
        const { state, onComplete, onDelete } = this.props
        return (
            <div>
                {state.todoList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onComplete={() => onComplete(todo.id)} onDelete={() => onDelete(todo.id)} />
                ))}
            </div>
        );
    }
}