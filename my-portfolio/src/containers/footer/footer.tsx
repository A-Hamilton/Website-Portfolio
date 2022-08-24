import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageContainer from "../PageContainer";
// @ts-ignore
import upArrow from "../../assets/arrow-up-solid.png"
// @ts-ignore
import githubLogo from "../../assets/github-brands.png";
// @ts-ignore
import emailLogo from "../../assets/envelope-solid.png";
// @ts-ignore
import linkedinLogo from "../../assets/linkedin-brands.png";


const FooterContainer = styled.div`
  ${tw`
      flex
      justify-between
      w-full
      max-w-screen-2xl
      overflow-hidden
      h-auto
      pb-20
      ease-in-out 
      duration-1000
    `};
`;

const ImageContainer = styled.div`
  ${tw`
    w-full
    h-1/2
    my-1 
    mt-10
  `};
`;


const Image = styled.img`
  ${tw`
  m-auto
  cursor-pointer
  h-[25px]
  w-[25px]
  lg:w-[30px]
  lg:h-[30px]
  xl:w-[35px]
  xl:h-[35px]
  my-4
`};
`;

export function Footer(){
    const [fade, SetFade] = useState("opacity-0");

    const handleFadeEffect = () => {
        SetFade("opacity-100");
    }

    const goBackToTheTop = () => {
        window.scrollTo(0,0);
    }
    return <PageContainer onLoad={handleFadeEffect} className=" bg-theme-darkblue">
        <FooterContainer className={fade}>
            <ImageContainer>
                <Image className="animate-bounce" onClick={goBackToTheTop} src={upArrow}/>
            </ImageContainer>
        </FooterContainer>
    </PageContainer>
}