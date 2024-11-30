import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const TaskList = ({ tasks, onDelete, onEdit }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const nextPage = () => {
    navigate('/formpage'); // Use navigate() to go to the 'FormPage' route
  };

  return (
    <Container className="mt-4">
      <h3>Test List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Test Name</th>
            <th>Priority</th>
            <th>Status</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.taskName}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
             
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </Button>
                {/* Use navigate to go to the form page */}
                <Button className="me-2" onClick={nextPage}>
                  Go to Test Page
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onDelete(task._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TaskList;
