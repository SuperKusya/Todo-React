import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import TodoList from './components/todo-list';

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Make Aws App', important: true },
        { label: 'Have a lunch', important: false },
    ];

    return (
        <div>
           <AppHeader />
           <TodoList todos={todoData}/>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
