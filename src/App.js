import React, { Component } from 'react'
import TodoList from './components/TodoList'
import { Icon } from 'antd';
import "./App.css"
import { Input } from 'antd';

const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      value:''
    }
    this.count = 0
  }
  //生成taskId
  generateId() {
    // return Math.floor(Math.random() * 9000) + 1000;
    this.count++
    return this.count
  }
  //添加待办事项
  handleAdd(taskName) {
    let search = this.refs.search
    search.focus()
    this.setState({
      value:''
    })
    if (!taskName) {
      return ''
    }
    var taskId = this.generateId()
    var todos = this.state.todos
    todos.push({ id: taskId, name: taskName, isCompleted: false })
    this.setState({
      todos: todos
    })
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

  handleToggleComplete=(taskId)=>{
    var todos = this.state.todos
    todos.forEach((Element,index) => {
      if(Element.id === taskId){
        todos[index].isCompleted = !todos[index].isCompleted;
      }
    })
    this.setState({ todos })
  }

  onChange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  render() {
    return (
      <div style={{"margin":"30px auto",width:"850px"}}>
        <h2>Todo List </h2>
        <header>
          <Icon type="apple" theme="filled" />
          <Search
            placeholder="input search text"
            enterButton="Add Todo"
            size="large"
            value = {this.state.value}
            onSearch={this.handleAdd.bind(this)}
            ref="search"
            onChange={this.onChange}
          />
        </header>
        <TodoList todos={this.state.todos} removeTask={this.handleRemoveTask.bind(this)} handleToggleComplete={this.handleToggleComplete} />
        <footer></footer>
        <div>
        </div>
      </div>

    );
  }
}

export default App
