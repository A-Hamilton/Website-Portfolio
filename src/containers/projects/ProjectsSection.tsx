import styled from "styled-components";
import tw from "twin.macro";
import PageContainer from "../PageContainer";

const ProjectContainer = styled.div`
  ${tw`
      w-full
      h-auto
      ease-in-out 
      duration-1000
      pb-40
      px-10
    `};
`;

const ProjectTitle = styled.h1`
  ${tw`
      font-bold
      text-2xl 
      text-center
      xl:text-5xl 
      sm:text-2xl 
      md:text-4xl 
      text-theme-darkblue
      mb-16
      leading-none
      mt-32
    `};
`;

const PortfolioContainer = styled.div`
  ${tw`
      w-[50%]
      h-auto
      py-20
    `};
`;

const PortfolioTitleContainer = styled.div`
  ${tw`
      w-auto
      h-auto
      flex
    `};
`;

const PortfolioTitle = styled.h1`
  ${tw`
      font-medium
      text-theme-darkblue
      text-2xl 
      text-center
      xl:text-5xl 
      sm:text-2xl 
      md:text-4xl 
      leading-none
    `};
`;

const ProjectContributors = styled.h1`
  ${tw`
      text-base
      md:text-sm
      text-theme-darkblue
      font-medium
    `};
`;

const StacksUsedContainer = styled.div`
  ${tw`
      w-full
      h-auto
      my-1
    `};
`;

const ButtonContainer = styled.div`
  ${tw`
      w-full
      h-auto
      my-10
    `};
`;

const DescriptionContainer = styled.div`
  ${tw`
      w-full
      h-auto
      my-1
    `};
`;

const ProjectDescription = styled.p`
  ${tw`
  font-normal
    text-xs
    lg:text-sm
    overflow-hidden
    text-gray-400
    `};
`;

const StacksUsed = styled.button`
  ${tw`
      bg-theme-darkblue
      rounded-md
      text-xs
      font-medium
      text-white
      text-center
      py-2
      px-4
      mr-1
      my-1
      ease-in-out 
      duration-300
    `};
`;

const GitHubButton = styled.button`
  ${tw`
  lg:py-2 
  lg:px-4 
  py-1
  px-2
  text-sm 
  drop-shadow-lg
  font-medium 
  lg:text-sm
  xl:text-lg
  text-[10px]
  bg-white 
  rounded-lg
  w-full
  border 
  text-theme-blue
  hover:bg-theme-darkblue
  hover:scale-105
  transform-gpu
  transition-all
  max-w-xs
    `};
`;

export function ProjectSection() {
  const hoverSize = "hover:scale-105";
  return (
    <PageContainer className="rounded-tl-[20%] rounded-br-[40%] bg-white">
      <ProjectContainer>
        <ProjectTitle>PROJECTS</ProjectTitle>
        <PortfolioContainer>
          <PortfolioTitleContainer>
            <PortfolioTitle>Portfolio</PortfolioTitle>
          </PortfolioTitleContainer>
          <PortfolioTitleContainer>
            <ProjectContributors>SOLO PROJECT</ProjectContributors>
          </PortfolioTitleContainer>
          <StacksUsedContainer>
            <StacksUsed className={hoverSize}>React</StacksUsed>
            <StacksUsed className={hoverSize}>HTML</StacksUsed>
            <StacksUsed className={hoverSize}>Tailwind</StacksUsed>
            <StacksUsed className={hoverSize}>TypeScript</StacksUsed>
            <StacksUsed className={hoverSize}>MongoDB</StacksUsed>
          </StacksUsedContainer>
          <DescriptionContainer>
            <ProjectDescription>My Portfolio</ProjectDescription>
          </DescriptionContainer>
          <ButtonContainer>
            <GitHubButton>View Source Code</GitHubButton>
          </ButtonContainer>
        </PortfolioContainer>
      </ProjectContainer>
    </PageContainer>
  );
}
