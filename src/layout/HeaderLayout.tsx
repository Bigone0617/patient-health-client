import React from "react";
import styled from "styled-components";
import SearchComponent from "../components/SearchComponent";

const HeaderLayout: React.FC<{}> = () => {
  return (
    <Header>
      <SearchComponent />
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HeaderLayout;
