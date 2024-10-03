import React from 'react';
import styled from 'styled-components';
import { images } from '../../constants';
import GlobalStyles from '../../constants/globalstyle';

const TechnologiesContainer = styled.div`
  
  padding: 2rem;
  text-align: center;
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechnologyItem = styled.li`
  margin: 1rem;
`;

const TechnologyIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const TechnologyName = styled.p`
  margin-top: 0.5rem;
`;

const Technologies = () => {
  return (
    <TechnologiesContainer>
    <GlobalStyles />
      <h2>Technologies</h2>
      <TechnologiesList>
        <TechnologyItem>
          <TechnologyIcon src= {images.javascript} />
          <TechnologyName>JavaScript</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.react} alt="React" />
          <TechnologyName>React</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.git} alt="git" />
          <TechnologyName>Git</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.html} alt="Html" />
          <TechnologyName>Html</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.css} alt="Css" />
          <TechnologyName>Css</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.nodejs} alt="Nodejs" />
          <TechnologyName>NodeJs</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.python} alt="Python" />
          <TechnologyName>Python</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.vitejs} alt="Vitejs" />
          <TechnologyName>ViteJs</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.github} alt="Github" />
          <TechnologyName>Github</TechnologyName>
        </TechnologyItem>
        <TechnologyItem>
          <TechnologyIcon src={images.mongodb} alt="Mongodb" />
          <TechnologyName>MongoDb</TechnologyName>
        </TechnologyItem>
      
      </TechnologiesList>
    </TechnologiesContainer>
  );
};

export default Technologies;
