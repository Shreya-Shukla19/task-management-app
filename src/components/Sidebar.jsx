import React from 'react';
import { Card } from 'react-bootstrap';

const Sidebar = ({ isOpen, stats }) => {
  return (
    <aside
      className={'sidebar p-3 ' + (isOpen ? '' : 'd-none d-lg-block')}
      style={{
        width: '280px',
        minHeight: 'calc(100vh - 56px)',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRight: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <h5 className="fw-bold mb-4 text-dark d-flex align-items-center">
        <i className="bi bi-bar-chart-fill me-2 text-primary"></i>
        Statistics
      </h5>

      <Card className="mb-3 border-0 shadow-sm">
        <Card.Body className="p-3 d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted d-block">Total Tasks</small>
            <h4 className="mb-0 fw-bold text-primary">{stats.total}</h4>
          </div>
          <div className="fs-2">📊</div>
        </Card.Body>
      </Card>

      <Card className="mb-3 border-0 shadow-sm">
        <Card.Body className="p-3 d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted d-block">To Do</small>
            <h4 className="mb-0 fw-bold text-info">{stats.todo}</h4>
          </div>
          <div className="fs-2">📝</div>
        </Card.Body>
      </Card>

      <Card className="mb-3 border-0 shadow-sm">
        <Card.Body className="p-3 d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted d-block">In Progress</small>
            <h4 className="mb-0 fw-bold text-warning">{stats.inProgress}</h4>
          </div>
          <div className="fs-2">⚡</div>
        </Card.Body>
      </Card>

      <Card className="mb-3 border-0 shadow-sm">
        <Card.Body className="p-3 d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted d-block">Completed</small>
            <h4 className="mb-0 fw-bold text-success">{stats.completed}</h4>
          </div>
          <div className="fs-2">✅</div>
        </Card.Body>
      </Card>

      <Card className="mb-3 border-0 shadow-sm bg-danger text-white">
        <Card.Body className="p-3 d-flex justify-content-between align-items-center">
          <div>
            <small className="d-block opacity-75">High Priority</small>
            <h4 className="mb-0 fw-bold">{stats.highPriority}</h4>
          </div>
          <div className="fs-2">🔥</div>
        </Card.Body>
      </Card>

      {stats.overdue > 0 && (
        <Card className="mb-3 border-0 shadow-sm bg-warning">
          <Card.Body className="p-3 d-flex justify-content-between align-items-center">
            <div>
              <small className="d-block text-dark">Overdue</small>
              <h4 className="mb-0 fw-bold text-dark">{stats.overdue}</h4>
            </div>
            <div className="fs-2">⚠</div>
          </Card.Body>
        </Card>
      )}

      <hr className="my-4" />

      <div className="text-center mt-3">
        <small className="text-muted">
          <i className="bi bi-clock-history me-1"></i>
          Last updated: {new Date().toLocaleTimeString()}
        </small>
      </div>
    </aside>
  );
};

export default Sidebar;