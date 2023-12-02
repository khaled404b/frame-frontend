import React from 'react';
import NavBar from './NavBar';

const servicesContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const servicesContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const serviceCardStyle = {
  width: 'calc(33.33% - 20px)',
  marginBottom: '20px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
  boxSizing: 'border-box',
  transition: 'transform 0.2s ease-in-out',
  cursor: 'pointer',
};

const headingStyle = {
  color: '#333',
};

const serviceImageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '10px',
};

const descriptionStyle = {
  color: '#777',
};

function Services() {
  const services = [
    {
      name: 'Architectural',
      description: 'Create stunning architectural designs tailored to your needs.',
      image: 'https://via.placeholder.com/400',
    },
    {
      name: 'Structural',
      description: 'Ensure the stability and integrity of your structures with our expert structural design services.',
      image: 'https://via.placeholder.com/400',
    },
    {
      name: 'Interior',
      description: 'Transform your interior spaces with our creative and functional interior design solutions.',
      image: 'https://via.placeholder.com/400',
    },
    {
      name: 'Exterior',
      description: 'Enhance the curb appeal and aesthetics of your property through innovative exterior designs.',
      image: 'https://via.placeholder.com/400',
    },
    {
      name: 'Review Contracts',
      description: 'Thoroughly review and analyze contracts to protect your interests in construction projects.',
      image: 'https://via.placeholder.com/400',
    },
    {
      name: 'Furniture Plan',
      description: 'Optimize your space with personalized furniture plans that complement your style and functionality.',
      image: 'https://via.placeholder.com/400',
    },
    {
      name: 'Complete Project Management',
      description: 'From concept to completion, we handle every aspect of your project with meticulous project management.',
      image: 'https://via.placeholder.com/400',
    },
  ];

  return (
    <div>
    <NavBar />
    <div style={servicesContainerStyle}>
      
      <h1 style={headingStyle}>Our Services</h1>
      <div style={servicesContentStyle}>
        {services.map((service, index) => (
          <div key={index} style={serviceCardStyle}>
            <img src={service.image} alt={service.name} style={serviceImageStyle} />
            <h2 style={headingStyle}>{service.name}</h2>
            <p style={descriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Services;
