
import React from 'react';
import { hot } from 'react-hot-loader/root';
import TodoList from './ToDoList/TodoList';
import dummydata from '../dummydata';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [...dummydata],
    };
  }

  render() {
    const toDoList = this.state;
    return (
      <div>
        <h1 className="todotitle">Definitely Not a Todo App</h1>
        <TodoList tasks={toDoList} />
      </div>
    );
  }
}

export default hot(App);
