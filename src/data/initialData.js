const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Enhance Homepage UI layout',
      description: 'Redesign homepage using React components and Tailwind CSS. ',
      priority: 'high',
      dueDate: '2025-10-30',
      assignee: 'Shreya Shukla',
      tags: ['Design', 'UI/UX', 'react', 'taiwind', 'css'] 
    },
    'task-2': {
      id: 'task-2',
      title: 'Add drag-and-drop Functionality',
      description: 'Use react-beautiful-dnd to move task between columns(To Do, In Progress,Completed',
      priority: 'medium',
      dueDate: '2025-10-28',
      assignee: 'Sarthak Bhadauriya',
      tags: ['React']
    },
    'task-3': {
      id: 'task-3',
      title: 'Write API Documentation',
      description: 'Document all REST API endpoints with examples',
      priority: 'low',
      dueDate: '2025-11-05',
      assignee: 'Shrutika Shukla',
      tags: ['Documentation']
    },
    'task-4': {
      id: 'task-4',
      title: 'Fix Login Bug',
      description: 'Users cannot login with correct credentials',
      priority: 'high',
      dueDate: '2025-10-27',
      assignee: 'Vibhu Singh',
      tags: ['Bug', 'Critical']
    },
    'task-5': {
      id: 'task-5',
      title: 'Setup Project Structure',
      description: 'Initialize projects with React,Node.js and Express',
      priority: 'high',
      dueDate: '2025-11-01',
      assignee: 'Shreya Shukla',
      tags: ['React','Node.js', 'Express',]
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '📝 To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: '⚡ In Progress',
      taskIds: ['task-3', 'task-4'],
    },
    'column-3': {
      id: 'column-3',
      title: '✅ Completed',
      taskIds: ['task-5'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;