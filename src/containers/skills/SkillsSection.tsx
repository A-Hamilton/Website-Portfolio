import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageContainer from "../PageContainer";
// @ts-ignore
import FrontendImage from "../../assets/laptop-code-solid.png";
// @ts-ignore
import toolsImage from "../../assets/hammer-solid.png";
// @ts-ignore
import BackendImage from "../../assets/code-branch-solid.png";
// @ts-ignore
import downArrow from "../../assets/chevron-left-solid.png";
// @ts-ignore
import rightArrow from "../../assets/chevron-left-solid-1.png";

const SkillsContainer = styled.div`
  ${tw`
      pt-20
      pb-60
      lg:pb-40
      w-full
      h-full
      overflow-hidden
    `};
`;

const CardContainer = styled.div`
  ${tw`
      py-0
      w-full
      h-40
      cursor-pointer
      px-5
      ease-in-out 
      duration-300
    `};
`;

const Percentage = styled.p`
  ${tw`
  font-normal
  float-right
  text-xs
  lg:text-sm
  xl:text-lg
  text-gray-400
  mt-0
  md:mt-3
    `};
`;

const Bar = styled.div`
  ${tw`
    box-border
    rounded-full
    `};
`;

const LeftContainer = styled.div`
  ${tw`
      w-full
      md:w-1/2
      float-left
      h-full
    `};
`;

const RightContainer = styled.div`
  ${tw`
      w-full
      md:w-1/2
      float-right
      h-full
    `};
`;

const StackTitleContainer = styled.div`
  ${tw`
      w-full
      h-auto
      inline-block
      mt-0
      ease-in-out 
      duration-1000
    `};
`;

const StackContainer = styled.div`
  ${tw`
      w-full
      h-auto
      mb-8
      md:mb-12
      ease-in-out 
      duration-1000
    `};
`;

const SkillsTitle = styled.h1`
  ${tw`
      font-bold
      text-2xl 
      text-center
      xl:text-5xl 
      sm:text-2xl 
      md:text-4xl 
      text-white
      mb-16
      leading-none
      mt-32
    `};
`;

const CardTitle = styled.h1`
  ${tw`
      font-semibold
      text-2xl 
      xl:text-3xl 
      text-sm
      sm:text-sm
      md:text-2xl 
      text-white
    `};
`;

const CardDescription = styled.p`
  ${tw`
  font-medium
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-400
    pb-8
    xl:pb-2
    lg:pb-2
    `};
`;

const ImageContainer = styled.div`
  ${tw`
    inline-block
    w-auto
    h-full
    flex
    mx-1
    sm:mx-3
    my-2
    h-1/2
  `};
`;

const FrontendImageC = styled.img`
  ${tw`
  align-middle
  justify-center
  h-[20px]
  w-[25px]
  lg:w-[30px]
  lg:h-[25px]
  xl:w-[40px]
  xl:h-[30px]
  my-2
`};
`;

const BackendImageC = styled.img`
  ${tw`
  h-[15px]
  w-[15px]
  lg:w-[20px]
  lg:h-[20px]
  xl:w-[30px]
  xl:h-[30px]
  my-2
  mx-3
`};
`;

const ToolsImageC = styled.img`
  ${tw`
  h-[15px]
  w-[15px]
  lg:w-[20px]
  lg:h-[20px]
  xl:w-[30px]
  xl:h-[30px]
  my-2
  mx-3
`};
`;

const ArrowImage = styled.img`
  ${tw`
  h-[15px]
  w-[20px]
  lg:w-[25px]
  lg:h-[20px]
  xl:w-[30px]
  xl:h-[25px]
  my-4
`};
`;

export function SkillsSection() {
  const [fade, SetFade] = useState("opacity-0");
  const hoverSize = "hover:scale-[1.01]"

  const handleFadeEffect = () => {
    SetFade("opacity-100");
  };

  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  const handleClick = (entry: number) => {
    if (entry === 1) {
      setCard1(!card1);
      setCard2(false);
      setCard3(false);
    }
    if (entry === 2) {
      setCard1(false);
      setCard2(!card2);
      setCard3(false);
    }
    if (entry === 3) {
      setCard1(false);
      setCard2(false);
      setCard3(!card3);
    }
  };

  return (
    <PageContainer onLoad={handleFadeEffect} className="bg-theme-darkblue px-20 lg:px-40 ">
      <SkillsContainer className={fade} id="skills">
        <SkillsTitle>SKILLS</SkillsTitle>
        <LeftContainer id="left">
          <CardContainer
            className={hoverSize}
            onClick={() => handleClick(1)}
          >
            <ImageContainer className="float-left">
              <FrontendImageC src={FrontendImage} />
            </ImageContainer>
            <ImageContainer className="float-right">
              {card1 ? (
                <ArrowImage src={rightArrow} />
              ) : (
                <ArrowImage src={downArrow} />
              )}
            </ImageContainer>
            <CardTitle>Frontend</CardTitle>
            <CardDescription>
              Click to view what experiences I have with frontend development.
            </CardDescription>
          </CardContainer>
          <CardContainer
            className={hoverSize}
            onClick={() => handleClick(2)}
          >
            <ImageContainer className="float-left">
              <BackendImageC src={BackendImage} />
            </ImageContainer>
            <ImageContainer className="float-right">
              {card2 ? (
                <ArrowImage src={rightArrow} />
              ) : (
                <ArrowImage src={downArrow} />
              )}
            </ImageContainer>
            <CardTitle>Backend</CardTitle>
            <CardDescription>
              Click to view what experiences I have with backend development.
            </CardDescription>
          </CardContainer>
          <CardContainer
            className={hoverSize}
            onClick={() => handleClick(3)}
          >
            <ImageContainer className="float-left">
              <ToolsImageC src={toolsImage} />
            </ImageContainer>
            <ImageContainer className="float-right">
              {card3 ? (
                <ArrowImage src={rightArrow} />
              ) : (
                <ArrowImage src={downArrow} />
              )}
            </ImageContainer>
            <CardTitle>Tools</CardTitle>
            <CardDescription>
              Click to view what experience I have with web development tools.
            </CardDescription>
          </CardContainer>
        </LeftContainer>
        <RightContainer id="right">
          {card1 ? (
            <CardContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">HTML</CardTitle>
                  <Percentage>100%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[100%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">CSS</CardTitle>
                  <Percentage>90%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[90%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">Tailwind</CardTitle>
                  <Percentage>85%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[85%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">React</CardTitle>
                  <Percentage>70%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[70%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
            </CardContainer>
          ) : (
            ""
          )}
          {card2 ? (
            <CardContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">JavaScript</CardTitle>
                  <Percentage>95%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[95%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">TypeScript</CardTitle>
                  <Percentage>80%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[80%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">MongoDB</CardTitle>
                  <Percentage>90%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[90%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">NodeJS</CardTitle>
                  <Percentage>70%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[70%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
            </CardContainer>
          ) : (
            ""
          )}
          {card3 ? (
            <CardContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">AbodeXD</CardTitle>
                  <Percentage>80%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[80%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">VSC</CardTitle>
                  <Percentage>85%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[85%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">Git</CardTitle>
                  <Percentage>95%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[95%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
              <StackContainer className={hoverSize}>
                <StackTitleContainer>
                  <CardTitle className="float-left">Postman</CardTitle>
                  <Percentage>80%</Percentage>
                </StackTitleContainer>
                <Bar className="w-full bg-white my-1 h-2">
                  <Bar className="h-full w-[80%] bg-theme-blue"></Bar>
                </Bar>
              </StackContainer>
            </CardContainer>
          ) : (
            ""
          )}
        </RightContainer>
      </SkillsContainer>
    </PageContainer>
  );
}
