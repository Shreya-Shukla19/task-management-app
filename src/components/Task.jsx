import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, Badge } from 'react-bootstrap';
import { getPriorityBadge, isOverdue, formatDate } from '../utils/helpers';

const Task = ({ task, index, onEdit, onDelete }) => {
  const overdue = isOverdue(task.dueDate);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          className="mb-3 shadow-sm"
          style={{
            borderLeft: `4px solid ${
              overdue
                ? '#dc3545'
                : task.priority === 'high'
                ? '#dc3545'
                : task.priority === 'medium'
                ? '#ffc107'
                : '#28a745'
            }`,
            cursor: 'grab',
            transform: snapshot.isDragging ? 'rotate(3deg)' : 'none',
            boxShadow: snapshot.isDragging
              ? '0 10px 30px rgba(0,0,0,0.3)'
              : '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: snapshot.isDragging ? '#f8f9fa' : 'white',
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card.Body className="p-3">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h6 className="mb-0 fw-bold text-dark flex-grow-1">
                {task.title}
              </h6>
              <Badge
                bg={getPriorityBadge(task.priority)}
                className="text-uppercase ms-2"
                style={{ fontSize: '0.65rem' }}
              >
                {task.priority}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-muted small mb-3" style={{ fontSize: '0.85rem' }}>
              {task.description}
            </p>

            {/* Tags */}
            {task.tags?.length > 0 && (
              <div className="mb-2">
                {task.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="badge bg-light text-dark me-1 mb-1"
                    style={{ fontSize: '0.7rem' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
              <small
                className={`d-flex align-items-center ${
                  overdue ? 'text-danger fw-bold' : 'text-muted'
                }`}
              >
                <i className="bi bi-calendar-event me-1"></i>
                {formatDate(task.dueDate)} {overdue && '(Overdue)'}
              </small>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-sm btn-outline-primary"
                  style={{ fontSize: '0.7rem', padding: '2px 8px' }}
                  title="Edit Task"
                  onClick={() => onEdit(task)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  style={{ fontSize: '0.7rem', padding: '2px 8px' }}
                  title="Delete Task"
                  onClick={() => onDelete(task.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>

            {/* Assignee */}
            {task.assignee && (
              <div className="mt-2">
                <small className="text-muted">
                  <i className="bi bi-person-circle me-1"></i> {task.assignee}
                </small>
              </div>
            )}
          </Card.Body>
        </Card>
      )}
    </Draggable>
  );
};

export default Task;