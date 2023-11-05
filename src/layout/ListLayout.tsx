import React from "react";
import styled from "styled-components";
import FilterComponent from "../components/FilterComponent";
import ListComponent from "../components/ListComponent";

const ListLayout: React.FC<{}> = () => {
  return (
    <List>
      <FilterComponent />
      <ListComponent />
    </List>
  );
};

const List = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

export default ListLayout;
