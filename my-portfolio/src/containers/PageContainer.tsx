import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
    ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      select-none
      overflow-x-hidden
      px-20 lg:px-40
    `};
`;

export default PageContainer;