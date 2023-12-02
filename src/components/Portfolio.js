import React, { useState } from 'react';
import NavBar from './NavBar';
import './Portfolio.css'; // Import a CSS file for styling (create Portfolio.css in the same directory)

function Portfolio() {
  const [selectedService, setSelectedService] = useState(null);


  const projects = [
    {
      serviceName: 'Architectural',
      projectName: 'Modern Residence',
      description: 'A contemporary architectural design for a luxurious residence.',
      image: 'https://via.placeholder.com/400',
    },
    {
      serviceName: 'Structural',
      projectName: 'Bridge Renovation',
      description: 'Structural redesign and renovation of a historic bridge.',
      image: 'https://via.placeholder.com/400',
    },
    {
      serviceName: 'Interior',
      projectName: 'Urban Loft',
      description: 'Interior design project for a stylish urban loft apartment.',
      image: 'https://via.placeholder.com/400',
    },
    {
      serviceName: 'Exterior',
      projectName: 'Landscape Oasis',
      description: 'Transformative exterior design for a beautiful outdoor oasis.',
      image: 'https://via.placeholder.com/400',
    },
    {
      serviceName: 'Review Contracts',
      projectName: 'Commercial Development',
      description: 'Reviewing and managing contracts for a large-scale commercial project.',
      image: 'https://via.placeholder.com/400',
    },
    {
      serviceName: 'Furniture Plan',
      projectName: 'Cozy Living Room',
      description: 'Creating a personalized furniture plan for a cozy living room space.',
      image: 'https://via.placeholder.com/400',
    },
    {
      serviceName: 'Complete Project Management',
      projectName: 'Mixed-Use Complex',
      description: 'End-to-end project management for a mixed-use development complex.',
      image: 'https://via.placeholder.com/400',
    },
    {
        serviceName: 'Architectural',
        projectName: 'Modern Residence',
        description: 'A contemporary architectural design for a luxurious residence.',
        image: 'https://via.placeholder.com/400',
      },
      {
        serviceName: 'Structural',
        projectName: 'Bridge Renovation',
        description: 'Structural redesign and renovation of a historic bridge.',
        image: 'https://via.placeholder.com/400',
      },
      {
        serviceName: 'Interior',
        projectName: 'Urban Loft',
        description: 'Interior design project for a stylish urban loft apartment.',
        image: 'https://via.placeholder.com/400',
      },
      {
        serviceName: 'Exterior',
        projectName: 'Landscape Oasis',
        description: 'Transformative exterior design for a beautiful outdoor oasis.',
        image: 'https://via.placeholder.com/400',
      },
      {
        serviceName: 'Review Contracts',
        projectName: 'Commercial Development',
        description: 'Reviewing and managing contracts for a large-scale commercial project.',
        image: 'https://via.placeholder.com/400',
      },
      {
        serviceName: 'Furniture Plan',
        projectName: 'Cozy Living Room',
        description: 'Creating a personalized furniture plan for a cozy living room space.',
        image: 'https://via.placeholder.com/400',
      },
      {
        serviceName: 'Complete Project Management',
        projectName: 'Mixed-Use Complex',
        description: 'End-to-end project management for a mixed-use development complex.',
        image: 'https://via.placeholder.com/400',
      },
     
  ];
  const filteredProjects = selectedService
  ? projects.filter((project) => project.serviceName === selectedService)
  : projects;

  return (
    <div>
      <NavBar />
      <div className="portfolio-container">
        <div className="portfolio-content">
          <h1 className="portfolio-heading">Portfolio</h1>
          <div className="filter-section">
            <button
              className={`filter-button ${selectedService === null ? 'active' : ''}`}
              onClick={() => setSelectedService(null)}
            >
              All
            </button>
            {Array.from(new Set(projects.map((project) => project.serviceName))).map(
              (serviceName, index) => (
                <button
                  key={index}
                  className={`filter-button ${selectedService === serviceName ? 'active' : ''}`}
                  onClick={() => setSelectedService(serviceName)}
                >
                  {serviceName}
                </button>
              )
            )}
          </div>
          <div className="projects-container">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.projectName} className="project-image" />
                <div className="project-details">
                  <h2 className="project-name">{project.projectName}</h2>
                  <p className="project-description">{project.description}</p>
                  <p className="project-service">{`Service: ${project.serviceName}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;