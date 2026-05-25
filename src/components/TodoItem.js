import React, { useState } from 'react';

function TodoItem({ todo, onToggleTodo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== '') {
      onUpdateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const priorityIcon = {
    high: '🔴',
    medium: '🟡',
    low: '🟢'
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />

        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <div className="edit-actions">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="view-mode">
            <span className="priority-badge">{priorityIcon[todo.priority]}</span>
            <span className="todo-text">{todo.text}</span>
            <span className="todo-date">{todo.createdAt}</span>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="todo-actions">
          <button className="edit-btn" onClick={handleEdit} title="Edit">
            ✏️
          </button>
          <button
            className="delete-btn"
            onClick={() => onDeleteTodo(todo.id)}
            title="Delete"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
