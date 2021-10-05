import React from "react";
import dummydata from "../dummydata";
import TodoList from "./ToDoList/TodoList";
import InputText from "./ToDoList/InputText";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentToDo: 'stuff',
      todos: [...dummydata],
      completedTodos: [],
    };
    this.textChange = this.textChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
  }

  textChange(e) {
    let current = e.target.value;
    this.setState({ currentToDo: current });
    e.preventDefault;
  }

  submitToDo() {
    let current = this.state.currentToDo;
    let currentToDos = [current, ...this.state.todos];
    this.setState({ todos: [...currentToDos] });
  }

  render() {
    const { todos, currentToDo } = this.state;

    return (
      <div>
        <h1 className="todotitle">Definitely Not a Todo App</h1>
        <InputText submitToDo={this.submitToDo} textChange={this.textChange} currentToDo={currentToDo} />
        <TodoList tasks={todos} />
      </div>
    );
  }
}

export default App;
