import React, { Component } from 'react';
import TodoItem from './TodoItem'
import Test from './Test'

class TodoList extends Component {
  constructor (props) {
  	super(props);
   this.state = {
  		inputValue: '',
	   list: ['111','222']
   };
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handleBtnClick  = this.handleBtnClick.bind(this);
   this.handleItemDelete =  this.handleItemDelete.bind(this)
  }

  render() {
  	 console.log('render');
    return (
      <div>
        <div>
	        <input
		         type="text"
               value={this.state.inputValue}
               onChange={this.handleInputChange}
	        />
	        <button onClick={this.handleBtnClick}>提交</button></div>
	      <ul>
		      {this.getTodoItem()}
	      </ul>
	      <Test content={this.state.inputValue}/>
      </div>
    );
  }
  getTodoItem () {
	  return this.state.list.map((item, index) => {
		  return (
				  <TodoItem
					  key={index}
					  content={item}
					  index={index}
					  deleteItem={this.handleItemDelete}
				  />
		  )
	  })
  }
	handleInputChange(e) {
  	const value = e.target.value;
	 this.setState(() => ({
			 inputValue: value
	 }))
  }
  handleBtnClick () {
	this.setState((prevState) => ({
		list: [...prevState.list, prevState.inputValue],
		inputValue: ''
	}))
  }
  handleItemDelete (index) {
   this.setState((prevState) => {
   	const list = [...prevState.list];
	   list.splice(index, 1);
	   return { list }
   })
  }
}

export default TodoList;
