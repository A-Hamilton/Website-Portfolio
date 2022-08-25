import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
// @ts-ignore
import programmerImage from "../../assets/undraw_Programming_re_kg9v.png";
// @ts-ignore
import githubLogo from "../../assets/github-brands.svg";
// @ts-ignore
import emailLogo from "../../assets/envelope-solid.svg";
// @ts-ignore
import linkedinLogo from "../../assets/linkedin-brands.svg";

const TopSectionContainer = styled.div`
  ${tw`
      flex
      justify-between
      w-full
      max-w-screen-2xl
      overflow-hidden
    `};
`;

const LeftContainer = styled.div`
  ${tw`
      flex
      w-full
      md:w-1/2
      flex-col
      ease-in-out 
      duration-1000
    `};
`;

const RightContainer = styled.div`
  ${tw`
    flex
    w-0
    md:w-1/2
    flex-col
    justify-center
    invisible 
    md:visible
    ease-in-out 
    duration-300
    `};
`;

const DescriptionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    `};
`;

const IntroText = styled.h1`
  ${tw`
      font-bold
      text-3xl 
      xl:text-7xl 
      sm:text-4xl 
      md:text-6xl 
      lg:font-black
      md:font-extrabold
      text-theme-darkblue
      mb-4
      leading-none
      mt-[15%]
    `};
`;

const KeyWord = styled.h1`
  ${tw`
    font-bold
    inline-block
    `};
`;

const Description = styled.p`
  ${tw`
    text-base
    lg:text-lg
    xl:text-xl
    overflow-hidden
    text-theme-darkblue
    my-4
    xl:pb-2
    lg:pb-2
    `};
`;

const Button = styled.button`
  ${tw`
    md:py-2
    md:px-8
    flex
    py-2
    px-4
    sm:px-10
    drop-shadow-lg
    font-medium 
    text-[10px]
    bg-white 
    rounded-lg
    inline-block
    border 
    hover:text-theme-blue
    hover:scale-105
    transform-gpu
    transition-all
    `};
`;

const ButtonContainer = styled.div`
  ${tw`
  inline-block
  w-auto
  px-1
    `};
`;

const LogoContainer = styled.div`
  ${tw`
    pt-10
    inline-block
    w-full
    bottom-0
    flex
    relative
    float-left
    h-full
  `};
`;

const LogoImage = styled.img`
  ${tw`
  h-[40px]
  w-[10%]
  mt-[20%]
  mx-1
  cursor-pointer
  ease-in-out 
  duration-300
`};
`;

export function TopSection() {
  const [fade, SetFade] = useState("opacity-0");

  const handleFadeEffect = () => {
    SetFade("opacity-100");
  };

  const handleClick = (entry: number) => {
    if (entry === 1) window.open("https://github.com/A-Hamilton");
    if (entry === 2)
      window.open("https://www.linkedin.com/in/adam-hamilton-5a650b187/");
    if (entry === 3)
      navigator.clipboard.writeText("adamhamiltonbusiness@outlook.com");
  };
  return (
    <TopSectionContainer onLoad={handleFadeEffect}>
      <LeftContainer className={fade}>
        <IntroText>
          Hi, my <br></br> name is{" "}
          <KeyWord className="text-theme-blue">Adam</KeyWord>
        </IntroText>
        <DescriptionContainer>
          <Description>
            I'm a <KeyWord>Software Engineer</KeyWord> from Belfast, Northern
            Ireland.
          </Description>
        </DescriptionContainer>
        <ButtonContainer>
          <Button className="mr-1 text-theme-blue border-theme-blue text-theme-blue ">
            Download CV
          </Button>
          <Button className="ml-1 animate-pulse hover:animate-none hover:bg-theme-darkblue border-theme-darkblue text-theme-darkblue ">
            About Me
          </Button>
        </ButtonContainer>
        <LogoContainer>
          <LogoImage
            className="hover:scale-110"
            onClick={() => handleClick(1)}
            src={githubLogo}
          />
          <LogoImage
            className="hover:scale-110 mx-1"
            onClick={() => handleClick(2)}
            src={linkedinLogo}
          />
          <LogoImage
            className="hover:scale-110"
            onClick={() => handleClick(3)}
            src={emailLogo}
          />
        </LogoContainer>
      </LeftContainer>
      <RightContainer className={fade}>
        <img src={programmerImage} />
      </RightContainer>
    </TopSectionContainer>
  );
}
