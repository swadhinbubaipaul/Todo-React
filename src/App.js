import "./App.css";
import TodoList from "./Components/TodoList";
import Input from "./Components/Input";
import Add from "./Components/Add";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textBox: "",
      todos: [],
    };
  }

  onDelete = (item) => {
    this.setState({
      todos: this.state.todos.filter((a) => a !== item),
    });
    console.log(item, "deleted");
  };

  onButtonClick = (event) => {
    if (this.state.todos.includes(this.state.textBox)) {
      alert("Item already present in list");
      this.setState({
        textBox: "",
      });
    } else if (this.state.textBox !== "") {
      this.setState({
        todos: [...this.state.todos, this.state.textBox],
        textBox: "",
      });
    }
  };

  changeOnTextBox = (event) => {
    this.setState({
      textBox: event.target.value,
    });
    console.log("text", event.target.value);
  };

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <div className="pa4-l">
          <div className="cf">
            <Input
              textBox={this.state.textBox}
              changeOnTextBox={this.changeOnTextBox}
            />
            <Add onButtonClick={this.onButtonClick} />
          </div>
        </div>
        <TodoList todos={this.state.todos} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
