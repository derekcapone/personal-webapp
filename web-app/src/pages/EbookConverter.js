import React, { useState, useEffect } from 'react';

const EbookConverter = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  // Handle file input change event
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload when button is clicked
  const handleFileUpload = () => {
    if (!file) {
      setMessage("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:5000/api/projects/ebookconverter', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error uploading file: ' + error));
  };
  
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <p>{message}</p>
    </div>
  );
  
};

export default EbookConverter;