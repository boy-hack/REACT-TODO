import React, { Component } from 'react'
import { List } from 'antd';
import TodoItem from "./TodoItem"
export default class TodoList extends Component {
    render() {
        const data = [];
        this.props.todos.forEach(element => {
            data.push(element.name)
        });
        return (
            <div style={{width:"654px",marginTop:"20px"}}>
            <List
                size="large"
                dataSource={this.props.todos}
                bordered
                renderItem={item => (<TodoItem taskId={item.id} removeTask={this.props.removeTask} name={item.name} isCompleted={item.isCompleted} handleToggleComplete={this.props.handleToggleComplete}/>)}
            />
            </div>
        );
    }
}
