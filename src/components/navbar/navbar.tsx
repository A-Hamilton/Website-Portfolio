import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavItems } from "./navitems";
import { Logo } from "./logo";

const NavContainer = styled.div`
min-height: 68px;
    ${tw`
      flex
      flex-row
      w-full
      max-w-screen-2xl
      items-center
      justify-between
    `};
`;

const LogoContainer = styled.div``;

export function NavBar(){
    return <NavContainer>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      <NavItems/>
    </NavContainer>
}