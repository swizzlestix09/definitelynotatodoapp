import React from 'react';
import dummydata from '../dummydata';
import TodoList from './ToDoList/TodoList';
import InputText from './ToDoList/InputText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentToDo:  '',
      todos: [...dummydata],
      completedTodos: [],
    };
    this.textChange = this.textChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
  }

  shouldComponentUpdate(prevState, )

  textChange(e) {
    let current = e.target.value;
    this.setState( { currentToDo: current} );
    e.preventDefault;
  }

  submitToDo() {
    let current = this.state.currentToDo;
    let currentToDos = [ current, ...this.state.todos];
    this.setState({ todos: [...currentToDos] });

    // this.setState( (current, currentToDos) => {
    //   {todos:[current, ...currentToDos]} } );
  }

  render() {
    const { todos } = this.state;
    console.log('todos rendered ', todos)
    return (
      <div>
        <h1 className="todotitle">Definitely Not a Todo App</h1>
        <InputText submitToDo={this.submitToDo} textChange={this.textChange} />
        <TodoList tasks={todos} />
      </div>
    );
  }
}

export default App;
