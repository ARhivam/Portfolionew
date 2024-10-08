import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const AboutText = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const AboutTitle = styled.h2`
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutText>
        <h3>Hi, I'm Shivam</h3>
        <AboutTitle>About Me</AboutTitle>
        <p>
        I am skilled in modern web development technologies, including React, HTML, CSS, JavaScript. I also work with back-end tools like Node.js, Python, and databases such as MongoDB. 
        Additionally, I use development tools like Git, Docker, and Vite, and am familiar with design platforms like Figma.
        </p>
       
        <p>
          Sed in neque eu enim fermentum posuere. Donec euismod orci vitae felis {' '} euismod laoreet. Nulla facilisi. Nulla facilisi.
        </p>
        <Button>Download Resume</Button>
      </AboutText>
      <AboutImageContainer>
        <AboutImage src={images.about} alt="about img" />
      </AboutImageContainer>
    </AboutContainer>
  );
};

export default About;
