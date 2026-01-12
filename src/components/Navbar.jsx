import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavigationBar = ({ onOpenModal, onToggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg sticky-top">
      <Container fluid>
        <Button
          variant="outline-light"
          size="sm"
          onClick={onToggleSidebar}
          className="me-3 d-lg-none"
        >
          <i className="bi bi-list fs-5"></i>
        </Button>

        <Navbar.Brand href="#" className="fw-bold fs-3 d-flex align-items-center">
          <span className="me-2">📋</span>
          <span
            style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TaskFlow
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="text-white mx-2">
              <i className="bi bi-speedometer2 me-1"></i> Dashboard
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              <i className="bi bi-kanban me-1"></i> Projects
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              <i className="bi bi-people me-1"></i> Team
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              <i className="bi bi-gear me-1"></i> Settings
            </Nav.Link>

            <Button
              variant="outline-light"
              size="sm"
              className="ms-3"
              style={{
                borderRadius: '20px',
                padding: '6px 20px',
                fontWeight: '600',
              }}
              onClick={onOpenModal}
            >
              <i className="bi bi-plus-lg me-1"></i> New Task
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;