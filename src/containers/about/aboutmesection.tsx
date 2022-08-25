import styled from "styled-components";
import tw from "twin.macro";
import PageContainer from "../PageContainer";
// @ts-ignore
import undrawImage from "../../assets/undraw_coding_re_iv62.png";

const AboutMeContainer = styled.div`
  ${tw`
      w-full
      h-auto
      pb-40
      overflow-hidden
    `};
`;

const AboutMeTitle = styled.h1`
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

const LeftContainer = styled.div`
  ${tw`
      md:w-1/2
      float-left
      h-full
    `};
`;

const RightContainer = styled.div`
  ${tw`
      md:w-1/2
      float-right
      h-full
      w-full
      text-center
      md:text-left
    `};
`;

const AboutMeDescriptionContainer = styled.div`
  ${tw`
      w-full
      h-auto
      flex
      mb-1
    `};
`;

const AboutMeDescription = styled.p`
  ${tw`
  font-medium
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    text-gray-400
    pb-8
    xl:pb-2
    lg:pb-2
    `};
`;

const Button = styled.button`
  ${tw`
    flex
    py-2
    px-4
    sm:px-6
    md:px-10
    lg:px-14 
    xl:px-20
    border-theme-blue
    drop-shadow-lg
    font-medium 
    text-[10px]
    text-theme-blue
    bg-transparent 
    rounded-lg
    border 
    hover:text-theme-blue
    hover:scale-105
    transform-gpu
    transition-all
    m-auto
    md:m-0
    `};
`;

const ButtonContainer = styled.div`
  ${tw`
  w-full
    `};
`;

const ImageContainer = styled.div`
  ${tw`
  w-full
  h-auto
    `};
`;

const Image = styled.img`
  ${tw`
  w-3/4
  invisible
  md:visible
  md:my-[10%]
  lg:my-0
    `};
`;

export function AboutMeSection() {
  return (
    <PageContainer>
      <AboutMeContainer>
        <AboutMeTitle>ABOUT ME</AboutMeTitle>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <AboutMeDescriptionContainer>
            <AboutMeDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </AboutMeDescription>
          </AboutMeDescriptionContainer>
          <AboutMeDescriptionContainer>
            <AboutMeDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </AboutMeDescription>
          </AboutMeDescriptionContainer>
          <AboutMeDescriptionContainer>
            <AboutMeDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </AboutMeDescription>
          </AboutMeDescriptionContainer>
          <ButtonContainer>
            <Button>Download CV</Button>
          </ButtonContainer>
        </RightContainer>
        <LeftContainer>
          <ImageContainer>
            <Image src={undrawImage} />
          </ImageContainer>
        </LeftContainer>
      </AboutMeContainer>
    </PageContainer>
  );
}
