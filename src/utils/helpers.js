export const generateId = () => {
  return 'task-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const isOverdue = (dueDate) => {
  const today = new Date();
  const taskDate = new Date(dueDate);
  today.setHours(0, 0, 0, 0);
  taskDate.setHours(0, 0, 0, 0);
  return taskDate < today;
};

export const getPriorityColor = (priority) => {
  switch(priority) {
    case 'high': return '#dc3545';
    case 'medium': return '#ffc107';
    case 'low': return '#28a745';
    default: return '#6c757d';
  }
};

export const getPriorityBadge = (priority) => {
  switch(priority) {
    case 'high': return 'danger';
    case 'medium': return 'warning';
    case 'low': return 'success';
    default: return 'secondary';
  }
};

export const calculateStats = (data) => {
  const allTasks = Object.values(data.tasks);

  return {
    total: allTasks.length,
    todo: data.columns['column-1']?.taskIds.length || 0,
    inProgress: data.columns['column-2']?.taskIds.length || 0,
    completed: data.columns['column-3']?.taskIds.length || 0,
    highPriority: allTasks.filter(task => task.priority === 'high').length,
    overdue: allTasks.filter(task => isOverdue(task.dueDate)).length,
  };
};

export const validateTask = (taskData) => {
  const errors = {};

  if (!taskData.title || taskData.title.trim().length === 0) {
    errors.title = 'Title is required';
  }
  if (!taskData.description || taskData.description.trim().length === 0) {
    errors.description = 'Description is required';
  }
  if (!taskData.dueDate) {
    errors.dueDate = 'Due date is required';
  }
  if (!taskData.priority) {
    errors.priority = 'Priority is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};