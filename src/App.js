import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component{
  state={
    todos:[
      {id:1, content:'Learn JS'},
      {id:2, content:'Learn REACT'},
      {id:3, content:'Play FIFA'},
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    this.setState({
      todos
    });
  }

addTodo=(todo)=>{
  todo.id=Math.random();
  let todos=[...this.state.todos, todo];
  this.setState({
    todos
  });
}

render(){
  return(
    <div className='todo-app container'>
      <h1 style={{textDecoration:'underline'}} className='center blue-text'>TODO's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
}
}


export default App;
