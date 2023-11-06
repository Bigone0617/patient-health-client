import React from "react";
import styled from "styled-components";
import { IPatientModel } from "../models/patient";
import useStore from "../store/store";

const ListPatientDetailComponent: React.FC<IPatientModel> = (props) => {
  const store = useStore();

  return (
    <DetailWrapper onClick={() => store.setShowModal(true, props)}>
      <ContentsTenWrapper>{props.name}</ContentsTenWrapper>
      <ContentsTenWrapper>{props.gender}</ContentsTenWrapper>
      <ContentsTwentyWrapper>{props.birthdate}</ContentsTwentyWrapper>
      <ContentsThirtyWrapper>
        {props.underlyingConditions}
      </ContentsThirtyWrapper>
      <ContentsThirtyWrapper>{props.painAreas}</ContentsThirtyWrapper>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  background: white;
  margin-top: 10px;
  border-radius: 30px;
  min-height: 70px;
`;

const ContentsTenWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsTwentyWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsThirtyWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ListPatientDetailComponent;
