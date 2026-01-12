import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Row } from 'react-bootstrap';
import Column from './Column';
import { useTaskContext } from '../context/TaskContext';

const Board = ({ onEditTask }) => {
  const { data, onDragEnd, deleteTask } = useTaskContext();

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task? Think again dude')) {
      deleteTask(taskId);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container fluid className="px-3">
        <Row className="g-3">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                onAddTask={() => onEditTask(null)}
                onEditTask={onEditTask}
                onDeleteTask={handleDeleteTask}
              />
            );
          })}
        </Row>
      </Container>
    </DragDropContext>
  );
};

export default Board;