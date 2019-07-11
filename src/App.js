import React, { Component } from 'react';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }


  addToState = (event) => {  
    if ((event.type === "click" || event.key === "Enter") && this.state.text !== '') {
      this.setState(prevState => { 
        return {
          text: '',
          todos: prevState.todos.concat(this.state.text)
        } 
      })
    }
  }


  removeFromState = (id) => {
    this.setState(prevState => { 
      return {
        todos: prevState.todos.filter((todo, index) => index !== id)
      } 
    })
  }

  removeAllFromState = () => {
    this.setState({
      todos: []
    });
  }

  render(){
    return(
      <div>
        <div className="containerTitle">
          <Title titleName="Emoji Todo List"/>
        </div>
        <div className="btnAfter"/>
        <TodoForm 
          inputValue={this.state.text}
          handleChange={this.handleChange}
          handleKeyPress={this.addToState}
          handleClick={this.addToState}
          removeAllFromState={this.removeAllFromState}
        />
        <TodoList
          todos={this.state.todos}
          handleRemove={this.removeFromState}
        />
      </div>
    );
  }
}

export default App;