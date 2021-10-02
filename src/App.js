import React from "react";
import { hot } from "react-hot-loader/root";
import TodoList from "./ToDoList/TodoList.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="todotitle">Definitely Not a Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default hot(App);
