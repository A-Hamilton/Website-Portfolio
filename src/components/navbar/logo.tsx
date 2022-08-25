/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// @ts-ignore
import logo from "../../assets/sadawagdsd.png";

const LogoContainer = styled.div`
  ${tw`
      flex
      items-center
    `};
`;

const Image = styled.div`
  ${tw`
  w-auto
  h-6
  md:h-9
  h-full
  `};
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={logo} />
      </Image>
    </LogoContainer>
  );
}
