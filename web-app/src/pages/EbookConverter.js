import React, { useState, useEffect } from 'react';

const EbookConverter = () => {
  const [projectData, setProjectData] = useState(null);
  
  useEffect(() => {
    console.log('Fetching project data...');
    fetch('http://localhost:5000/api/projects/ebookconverter')  // Adjust URL based on Flask endpoint
      .then(response => response.json())
      .then(data => {
        setProjectData(data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, []);

  return (
    <div className='basic-text'>
      <h2>eBook File Converter Tool</h2>
      {projectData && (
        <div>
          <p>{projectData.message}</p>
        </div>
      )}
    </div>
  );
};

export default EbookConverter;