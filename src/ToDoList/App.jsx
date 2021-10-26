import React from "react";
import dummydata from "../../dummydata";
import TodoList from "./TodoList";
import InputText from "./InputText";
import CompletedToDo from "./CompletedToDo";
import "../main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.unCheck = React.createRef();
    this.state = {
      currentToDo: "",
      todos: [...dummydata],
      completedTodos: [],
    };
    this.textChange = this.textChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
    this.markedAsComplete = this.markedAsComplete.bind(this);
  }


  textChange(e) {
    console.log(e.target.value);
    this.setState({ currentToDo: e.target.value });
    e.preventDefault();
  }

  submitToDo(e) {
    let current = this.state.currentToDo;
    let currentToDos = [current, ...this.state.todos];
    this.setState({ todos: [...currentToDos]});
    e.preventDefault();
  }

  markedAsComplete(e) {
    let i = e.target.value;
    let todos = this.state.todos;
    let completed = todos.splice(i, 1);
    let allCompleted = this.state.completedTodos;
    this.setState({ completedTodos: [...completed, ...allCompleted]});
    e.preventDefault();
  }

  render() {
    const { todos, currentToDo, submitToDo, completedTodos} = this.state;
    return (
      <>
        <div className="mainDiv">
          <h1 className="title headers">Definitely Not a Todo App</h1>
          <InputText
            submitToDo={this.submitToDo}
            textChange={this.textChange}
            currentToDo={currentToDo}
          />
          <div className="todoDivs">
            <TodoList
              tasks={todos}
              markedAsComplete={this.markedAsComplete}
              checkRef={this.unCheck}
              completedTodos={completedTodos}
            />
            {/* <CompletedToDo complete={this.state.completedTodos} /> */}
          </div>
        </div>
      </>
    );
  }
}

export default App;
