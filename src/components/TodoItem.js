import React, { Component } from 'react'
import { List,Button,Checkbox } from 'antd';

export default class TodoItem extends Component {
    
    //删除某待办事项
    handleRemove() {
       this.props.removeTask(this.props.taskId) 
    }
    onChange=(e)=>{
        this.props.handleToggleComplete(this.props.taskId)
    }
    render() {
        var { name, isCompleted } = this.props,
            operation = ''
        if (isCompleted) {
            operation = <s>{name}</s>
        } else {
            operation =
            <span>
                <b>{name}</b>
            </span>
        }
        return (
            <List.Item><Checkbox onChange={this.onChange}>{operation}</Checkbox>&nbsp;&nbsp;&nbsp;<Button type="default" shape="circle" icon="close" size="small" onClick={this.handleRemove.bind(this)} /> </List.Item>
        )
    }
    
}
