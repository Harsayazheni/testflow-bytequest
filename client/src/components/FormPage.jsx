import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const FormPage = () => {
  // List of Google Form URLs (replace with your actual form URLs)
  const formUrls = [
    'https://forms.gle/j8L4iq4HUrW3XGLe7',  // Google Form for Test 1
    'https://forms.gle/5o42MDcW1JnJs7qw5'  // Google Form for Test 3
  ];

  // State to keep track of the current form being displayed
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  // Function to switch to the next form in the array
  const nextForm = () => {
    setCurrentFormIndex((prevIndex) => 
      (prevIndex + 1) % formUrls.length // Loops back to the first form after the last one
    );
  };

  return (
    <Container>
      {/* Title of the Page */}
      <h1>Test Form</h1>

      {/* Google Form embedded inside an iframe */}
      <iframe
        src={formUrls[currentFormIndex]} // Dynamically load the current form URL
        width="100%" // Full-width iframe
        height="600px" // Set height for the iframe
        frameBorder="0"
        title="Test Form"
      ></iframe>

      {/* Button to switch to the next Google Form */}
      <Button onClick={nextForm} className="mt-3">
        Next Test Form
      </Button>
    </Container>
  );
};

export default FormPage;
