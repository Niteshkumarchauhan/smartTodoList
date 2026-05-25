import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a todo!');
      return;
    }
    onAddTodo(input, priority);
    setInput('');
    setPriority('medium');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="input-field"
          placeholder="What needs to be done?"
          value={input}
          onChange={handleInputChange}
          autoFocus
        />
        <select
          className="priority-select"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
