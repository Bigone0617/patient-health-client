import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../store/store";
import { IPatientModel } from "../models/patient";
import ListPatientDetailComponent from "./ListPatientDetailComponent";
import patientApi from "../api/patient/patientApi";

const ListComponent: React.FC<{}> = () => {
  const store = useStore();
  const [patientList, setPatientList] = useState<IPatientModel[]>([]);

  useEffect(() => {
    (async () => {
      const { response } = await patientApi.getAllPatient();
      store.setPatients(response?.data as IPatientModel[]);
    })();
    setPatientList(store.patients);
  }, []);

  return (
    <ListWrapper>
      <ListHeaderWrapper>
        <HeaderTenWrapper>이름</HeaderTenWrapper>
        <HeaderTenWrapper>성별</HeaderTenWrapper>
        <HeaderTwentyWrapper>생년월일</HeaderTwentyWrapper>
        <HeaderThirtyWrapper>기저 질환</HeaderThirtyWrapper>
        <HeaderThirtyWrapper>통증 부위</HeaderThirtyWrapper>
      </ListHeaderWrapper>
      <ListContentsWrapper>
        {patientList &&
          patientList.map((patient) => (
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
`;

const ListHeaderWrapper = styled.div`
  width: 100%;
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
`;

export default ListComponent;
