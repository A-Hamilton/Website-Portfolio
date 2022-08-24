import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { AboutMeSection } from './containers/about/aboutmesection';
import { ContactSection } from './containers/contactSection/contactsection';
import { Footer } from './containers/footer/footer';
import { HomePage } from './containers/homepage/Homepage';
import { ProjectSection } from './containers/projects/ProjectsSection';
import { SkillsSection } from './containers/skills/SkillsSection';

const AppContainer = styled.div`
    ${tw`
      w-full
      h-full
      bg-theme-darkblue
      text-white
    `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage/>
      <SkillsSection/>
      <ProjectSection/>
      <AboutMeSection/>
      <ContactSection/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
