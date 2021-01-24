import React, { Component } from 'react';

class AddTodo extends Component {
    state ={
        content:''
    }
    handleChange =(e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
           content: ''
       });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label style={{fontSize:'18px'}}>Add new TODO: </label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
                <p style={{textAlign:'center', color:'red'}}>*Click on TODO item to delete from the list.</p>
            </div>
        )
    }
}

export default AddTodo;