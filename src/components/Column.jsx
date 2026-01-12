import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Card } from 'react-bootstrap';
import Task from './Task';

const Column = ({ column, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <Card
        className="shadow-lg border-0 h-100"
        style={{
          backgroundColor: 'rgba(255,255,255,0.97)',
          borderRadius: '16px',
          minHeight: '600px',
        }}
      >
        {/* Column Header */}
        <Card.Header
          className="border-bottom-0 p-4"
          style={{
            background:
              'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-dark d-flex align-items-center">
              {column.title}
            </h5>
            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: column.color || '#6c757d',
                fontSize: '0.85rem',
                padding: '6px 12px',
              }}
            >
              {tasks.length}
            </span>
          </div>
        </Card.Header>

        {/* Droppable Area */}
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <Card.Body
              className="p-3"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? 'rgba(102, 126, 234, 0.05)'
                  : 'transparent',
                transition: 'background-color 0.3s ease',
                minHeight: '450px',
                overflowY: 'auto',
              }}
            >
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    onEdit={onEditTask}
                    onDelete={onDeleteTask}
                  />
                ))
              ) : (
                <div className="text-center text-muted mt-5">
                  <p className="fs-1 mb-3">📭</p>
                  <p className="fw-light">No tasks here</p>
                  <small className="text-muted">
                    Drag tasks or create new ones
                  </small>
                </div>
              )}
              {provided.placeholder}
            </Card.Body>
          )}
        </Droppable>

        {/* Add Task Button */}
        <Card.Footer
          className="bg-white border-top-0 p-3"
          style={{ borderRadius: '0 0 16px 16px' }}
        >
          <button
            className="btn btn-outline-primary btn-sm w-100 d-flex align-items-center justify-content-center"
            style={{ borderRadius: '10px', padding: '10px', fontWeight: '500' }}
            onClick={() => onAddTask(column.id)}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Task
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Column;