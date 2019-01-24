import React, { Component } from 'react'
export default class TodoItem extends Component {
    
    //删除某待办事项
    handleRemove() {
       this.props.removeTask(this.props.taskId) 
    }
    render() {
        var { name, isCompleted } = this.props,
            operation = ''
        console.log(this.props.name)
        if (isCompleted) {
            operation = <s>{name}</s>
        } else {
            operation =
            <span>
                <b>{name}</b>
            </span>
        }
        return (
            <li >
                {operation}
            <button onClick={this.handleRemove.bind(this)}>x</button>
            </li>
        )
    }
    
}
