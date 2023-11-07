import React from "react";
import styled from "styled-components";
import ListComponent from "../components/ListComponent";

const ListLayout: React.FC<{}> = () => {
  return (
    <List>
      <ListComponent />
    </List>
  );
};

const List = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

export default ListLayout;
