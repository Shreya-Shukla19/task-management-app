import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import TaskModal from './components/TaskModal';
import { useTaskContext } from './context/TaskContext';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { stats } = useTaskContext();

  const handleOpenModal = (task = null) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  return (
    <div className="App min-vh-100">
      <Navbar
        onOpenModal={() => handleOpenModal()}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="d-flex">
        <Sidebar isOpen={sidebarOpen} stats={stats} />

        <main className="flex-grow-1 p-4">
          <div className="container-fluid">
            <div className="text-center mb-4">
              <h2 className="text-white fw-bold display-5">My Project Board</h2>
              <p className="text-white-50 lead">
                Drag and drop tasks to organize your workflow
              </p>
            </div>
            <Board onEditTask={handleOpenModal} />
          </div>
        </main>
      </div>

      <TaskModal show={showModal} onHide={handleCloseModal} task={editingTask} />
    </div>
  );
}

export default App;