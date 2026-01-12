import React, { createContext, useContext, useState, useEffect } from 'react';
import initialData from '../data/initialData';
import { calculateStats, generateId } from '../utils/helpers';

const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [stats, setStats] = useState(calculateStats(initialData));

  useEffect(() => {
    setStats(calculateStats(data));
  }, [data]);

  const addTask = (taskData, columnId = 'column-1') => {
    const newTaskId = generateId();
    const newTask = {
      id: newTaskId,
      ...taskData,
      createdAt: new Date().toISOString().split('T')[0],
    };

    const newData = {
      ...data,
      tasks: {
        ...data.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...data.columns,
        [columnId]: {
          ...data.columns[columnId],
          taskIds: [...data.columns[columnId].taskIds, newTaskId],
        },
      },
    };

    setData(newData);
    return newTask;
  };

  const updateTask = (taskId, updates) => {
    const newData = {
      ...data,
      tasks: {
        ...data.tasks,
        [taskId]: {
          ...data.tasks[taskId],
          ...updates,
        },
      },
    };
    setData(newData);
  };

  const deleteTask = (taskId) => {
    const columnId = Object.keys(data.columns).find(colId =>
      data.columns[colId].taskIds.includes(taskId)
    );

    if (!columnId) return;

    const newTaskIds = data.columns[columnId].taskIds.filter(id => id !== taskId);
    const { [taskId]: deletedTask, ...remainingTasks } = data.tasks;

    const newData = {
      ...data,
      tasks: remainingTasks,
      columns: {
        ...data.columns,
        [columnId]: {
          ...data.columns[columnId],
          taskIds: newTaskIds,
        },
      },
    };

    setData(newData);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const endColumn = data.columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }

    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEndColumn = {
      ...endColumn,
      taskIds: endTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      },
    };

    setData(newData);
  };

  const value = {
    data,
    stats,
    addTask,
    updateTask,
    deleteTask,
    onDragEnd,
    setData,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};