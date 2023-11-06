import React, { useState } from "react";
import styled from "styled-components";
import { BsSearchHeart } from "react-icons/bs";
import patientApi from "../api/patient/patientApi";
import { SearchField } from "../models/patient.d";
import useStore from "../store/store";

const SearchComponent: React.FC<{}> = () => {
  const store = useStore();
  const [searchField, setSearchField] = useState<SearchField>(SearchField.NAME);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(e.target.value as SearchField);
  };

  const onChangeSearchTextHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const searchPatientList = await patientApi.getPatientListBySearch({
      searchTerm,
      searchField,
    });

    store.setPatients(searchPatientList)
    setSearchTerm('')
  };

  return (
    <SearchWrapper>
      <IconInputWrapper>
        <IconWrapper>
          <BsSearchHeart />
        </IconWrapper>
        <SearchInputForm onSubmit={(e) => onSubmitHandler(e)}>
          <SearchInput
            onChange={(e) => onChangeSearchTextHandler(e)}
            value={searchTerm}
          ></SearchInput>
        </SearchInputForm>
      </IconInputWrapper>
      <SelectWrapper>
        <Select
          name="searchField"
          onChange={(e) => onChangeSelectHandler(e)}
          value={searchField || ""}
        >
          <option value={SearchField.NAME}>이름</option>
          <option value={SearchField.CONDITION}>기저 질환</option>
          <option value={SearchField.AREA}>통증 부위</option>
        </Select>
      </SelectWrapper>
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
  width: 90%;
  height: 70%;
  border: none;
  font-size: 25px;
  &:focus {
    outline: none;
  }
`;

const SelectWrapper = styled.div`
  width: 20%;
  height: 70%;
  border-radius: 100px;
  border: 1px solid lightgray;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  width: 80%;
  height: 90%;
  border: none;
  &:focus {
    outline: none;
  }
  color: grey;
`;

export default SearchComponent;
