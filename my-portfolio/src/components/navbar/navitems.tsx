/* eslint-disable jsx-a11y/anchor-is-valid */
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.div`
  ${tw`
    flex
    list-none
`};
`;

const NavItem = styled.li`
  ${tw`
    text-xs
    md:text-base
    font-medium
    lg:font-semibold
    mr-4
    md:mr-10
    cursor-pointer
    transition
    duration-300
    ease-in-out
    text-theme-darkblue
    hover:text-theme-darkblue
`};
`;

export function NavItems() {
  const [state, setState] = useState(false);
  const hoverSize = "hover:scale-105";

  const handleClick = () => {
    setState(!state);
  };

  return (
    <ListContainer>
     <NavItem className={hoverSize}>
     {state ? <a href="#">ABOUT ME</a> : ""}
      </NavItem>
      <NavItem className={hoverSize}>
      {state ? <a href="#" >PROJECTS</a> : ""}
      </NavItem>
      <NavItem className={hoverSize}>
      {state ? <a href="#" >CONTACT</a> : ""}
      </NavItem>
      <NavItem>
        <a href="#" onClick={handleClick} className=" text-theme-blue hover:text-theme-darkblue">
          NAV
        </a>
      </NavItem>
    </ListContainer>
  );
}
