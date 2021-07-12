import React from 'react'

export default props =>
  <form onSubmit={props.handleTodoSubmit}>
    <input
    autoFocus
      type='text'
      className="new-todo"
      onChange={props.handleNewTodoChange}
      value={props.currentTodo}
      placeholder="What needs to be done?"/>
  </form>
