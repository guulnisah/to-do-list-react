import React from 'react';
import styled from 'styled-components'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { nanoid } from 'nanoid';

const StyledContainer = styled.div`
  background: #F7EDE2;
  border-radius: 1rem;
  width: 60vw;
  min-height: 60vh;
  padding: 6rem;
  @media screen and (max-width: 1000px) {
    padding: 4rem;
    width: 80vw;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    padding: 2rem;
  }
`

const StyledTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 3.5rem;
  color: #F28482;
  @media screen and (max-width: 700px) {
    font-size: 2.5rem;
  }
`

const StyledSubTitle = styled(StyledTitle)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`

const StyledSubText = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1rem;
  color: #8e8c8c;
  margin-bottom: 2rem;
`

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("todoList")) || {
      todoList: []
    };
    this.setState = this.setState.bind(this)
  }

  componentDidUpdate() {
    console.log("Update")
    localStorage.setItem("todoList", JSON.stringify(this.state))
  }

  handleSubmit = (value) => {
    if (!value) { return }
    this.setState((prevState) => {
      return {
        todoList: [
          ...prevState.todoList,
          { text: value, completed: false, id: nanoid() }
        ],
      };
    });
  }

  handleComplete = (id) => {
    const todoList = [...this.state.todoList];
    const updatedTodoList = todoList.map(elem => {
      if (elem.id === id) { return { ...elem, completed: !elem.completed } }
      else { return elem }
    });
    this.setState({ todoList: updatedTodoList });
  }

  handleDelete = (id) => {
    const todoList = [...this.state.todoList];
    const updatedTodoList = todoList.filter(elem => elem.id !== id);
    this.setState({ todoList: updatedTodoList });
  }

  render() {
    console.log(this.state)
    const completed = this.state.todoList.reduce((acc, curr) => {
      if (curr.completed) { acc.push(curr) }
      return acc
    }, [])
    return (
      <StyledContainer>
        <StyledTitle>basic to-do list</StyledTitle>
        <StyledSubText>{this.state.todoList.length} Task(s) | {completed.length} Completed</StyledSubText>
        <TodoForm onSubmit={this.handleSubmit} />
        {this.state.todoList.length
          ?
          <>
            <StyledSubTitle>tasks for today</StyledSubTitle>
            <TodoList state={this.state} onComplete={this.handleComplete} onDelete={this.handleDelete} />
          </>
          :
          <StyledSubTitle>no tasks for today 😊</StyledSubTitle>
        }
      </StyledContainer>
    );
  }
}

export default App;




// handleComplete = (id) => {
//   this.setState((prevState) => {
//     return prevState.todoList.map(elem => {
//       if (elem.id === id) { return { ...elem, completed: !elem.completed } }
//       return elem
//     })
//   })
// }

// handleDelete = (id) => {
//   this.setState((prevState) => {
//     prevState.todoList.filter(elem => elem.id !== id)
//   })
//   console.log(this.state)
// }