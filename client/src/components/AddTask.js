import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import GoogleForm from './GoogleForm'

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ taskName, priority, status, description });
    setTaskName('');
    setPriority('');
    setStatus('');
    setDescription('');
  };

  return (
    <Container className="mt-4">
      <h3>Add New Test</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Test Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Level</Form.Label>
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="Low">Easy</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Form.Group>
       
        
        <Button variant="primary" type="submit">
          Add Test
        </Button>
      </Form>

    </Container>
  );
};

export default AddTask;
