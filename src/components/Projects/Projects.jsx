import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';
import GlobalStyles from '../../constants/globalstyle';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const ProjectCardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectCard = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Projects = () => {
  const redirectToGitHubChessGame = () => {
    window.location.href = 'https://github.com/ARhivam/Chess-Game'; 
  };
  const redirectToGitHubChatApp = () => {
    window.location.href = 'https://github.com/ARhivam/Chat-App'; 
  };
  const redirectToGitHubHospital = () => {
    window.location.href = 'https://github.com/ARhivam/Hospital-Management-System'; 
  };

  return (
    <ProjectsContainer>
      <GlobalStyles />
      <h2>Projects</h2>
      <ProjectGrid>
        <ProjectCardLink onClick={redirectToGitHubChessGame}>
          <ProjectCard>
            <ProjectImage src={images.text_image} alt="Text to Image Generator" />
            <ProjectTitle>Chess Game</ProjectTitle>
            <ProjectDescription>
              Project made by using socket.io node.js express.js and javascript .
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHubHospital}>
          <ProjectCard>
            <ProjectImage src={images.hms} alt="Hospital Management System" />
            <ProjectTitle>Hospital Management System</ProjectTitle>
            <ProjectDescription>
              Manage hospital operations and patient records efficiently with this advanced system.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
        <ProjectCardLink onClick={redirectToGitHubChatApp}>
          <ProjectCard>
            <ProjectImage src={images.chat} alt="Chat Application" />
            <ProjectTitle>Chat Application</ProjectTitle>
            <ProjectDescription>
              Chat Application made by socket.io node.js express.js html css.
            </ProjectDescription>
          </ProjectCard>
        </ProjectCardLink>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
