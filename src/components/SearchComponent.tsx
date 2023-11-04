import React from "react";
import styled from "styled-components";
import { BsSearchHeart } from "react-icons/bs";

const SearchComponent: React.FC<{}> = () => {
  return (
    <SearchWrapper>
      <IconInputWrapper>
        <IconWrapper>
          <BsSearchHeart />
        </IconWrapper>
        <SearchInputForm>
          <SearchInput></SearchInput>
        </SearchInputForm>
      </IconInputWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #aaa;
    font-size: 30px;
  }
`;

const IconInputWrapper = styled.div`
  height: 70%;
  width: 60%;
  border-radius: 100px;
  border: 1px solid lightgray;
  display: flex;
`;

const IconWrapper = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 5px;
`;

const SearchInputForm = styled.form`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  idth: 90%;
  height: 70%;
  border: none;
  font-size: 25px;
  &:focus {
    outline: none;
  }
`;

export default SearchComponent;
