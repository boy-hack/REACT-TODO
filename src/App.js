import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      id: 0
    }
  }
  //生成taskId
  generateId() {
    // return Math.floor(Math.random() * 9000) + 1000;

    this.setState({
      id: this.state.id + 1
    })
    return this.state.id
  }
  //添加待办事项
  handleAdd() {
    var taskNameNode = ReactDOM.findDOMNode(this.refs.taskname);
    let taskName = taskNameNode.value.trim()

    if (!taskName) {
      return ''
    }
    var taskId = this.generateId()
    var todos = this.state.todos
    todos.push({ id: taskId, name: taskName, isCompleted: false })
    this.setState({
      todos: todos
    })
    taskNameNode.value = ''
    console.log(todos)
  }

  //删除某待办事项
  handleRemoveTask(taskId) {
    let todos = this.state.todos
    todos.forEach((Element, index) => {
      if (Element.id === taskId) {
        todos.splice(index, 1)
      }
    }
    )
    this.setState({ todos: todos })
  }

  render() {
    return (
      <div>
        <h3>Todo List Demo</h3>
        <header>
          <input type="text" ref="taskname" />&nbsp;&nbsp;
            <button onClick={this.handleAdd.bind(this)}>Add Todo</button>
        </header>
        <TodoList todos={this.state.todos} removeTask={this.handleRemoveTask.bind(this)} />
        <footer></footer>
      </div>
    );
  }
}

export default App
