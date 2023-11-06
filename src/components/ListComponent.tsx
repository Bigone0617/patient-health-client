import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../store/store";
import ListPatientDetailComponent from "./ListPatientDetailComponent";
import patientApi from "../api/patient/patientApi";
import { useQuery } from "@tanstack/react-query";
import ModalComponent from "./ModalComponent";

const ListComponent: React.FC<{}> = () => {
  const store = useStore();
  const {data, isFetched } = useQuery({queryKey: ['patient'], queryFn:() => patientApi.getAllPatient(), refetchInterval: 10000, refetchOnWindowFocus: true});

  useEffect(() =>{
    if(isFetched && data){
      store.setPatients(data)
    }
  },[])

  return (
    <ListWrapper>
      {
        store.showModal.isShow ? (
          <ModalComponent {...store.showModal.props}/>
        ) : null
      }
      <ListHeaderWrapper>
        <HeaderTenWrapper>이름</HeaderTenWrapper>
        <HeaderTenWrapper>성별</HeaderTenWrapper>
        <HeaderTwentyWrapper>생년월일</HeaderTwentyWrapper>
        <HeaderThirtyWrapper>기저 질환</HeaderThirtyWrapper>
        <HeaderThirtyWrapper>통증 부위</HeaderThirtyWrapper>
      </ListHeaderWrapper>
      <ListContentsWrapper>
        {store.patients?.map((patient) => (
            <ListPatientDetailComponent key={patient._id} {...patient} />
          ))}
      </ListContentsWrapper>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListHeaderWrapper = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
`;

const HeaderTenWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTwentyWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderThirtyWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContentsWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightgray;
  border-radius: 10px;
  gap: 10px;
`;

export default ListComponent;
