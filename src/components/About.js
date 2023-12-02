import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import NavBar from './NavBar';
import bannerImage from './Img/logo192.jpg';

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Banner = styled.img`
  width: 25%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: black;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.3em;
  line-height: 1.6;
  color: black;
  margin-bottom: 7px;
`;

const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TeamMember = styled.div`
  flex: 1 1 300px;
  text-align: center;
  color: black;

`;

const MemberImage = styled.img`
  width: 50%;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const AnimatedContainer = animated(Container);

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const teamMembers = [
    { name: 'John Doe', role: 'Co-Founder & CEO' },
    { name: 'Jane Smith', role: 'Head of Design' },
    // Add more team members as needed
  ];

  return (
    <div>
      <NavBar />
      <AnimatedContainer style={fadeIn}>
        <Banner src={bannerImage} alt="Company Banner" />
        <Heading>Welcome to Frame</Heading>
        <Text>
          At Frame, we are a family dedicated to bringing your dreams to life. Explore our world of innovation where engineering, architecture, and design converge to create extraordinary experiences.
        </Text>
        <Text>
          Established in 2021, our journey has been defined by a relentless pursuit of excellence. We take pride in not just meeting but exceeding expectations, delivering bespoke solutions for every project.
        </Text>
        <Text>
          Our mission is simple: [Briefly state your mission and values]. Whether you're envisioning a breathtaking construction project, seeking architectural brilliance, or dreaming of a captivating interior design, we are here to transform your ideas into reality.
        </Text>

        <Heading>Meet Our Team</Heading>
        <TeamSection>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <MemberImage src={bannerImage} alt={`Team Member ${index + 1}`} />
              <p>{member.name}</p>
              <small>{member.role}</small>
            </TeamMember>
          ))}
        </TeamSection>
      </AnimatedContainer>
    </div>
  );
};

export default About;
