import React, { useEffect, useState } from "react";
import "./App.css";
import patientApi from "./api/patient/patientApi";
import { Gender, IPatientModel } from "./models/patient.d";
import HeaderLayout from "./layout/HeaderLayout";
import ListLayout from "./layout/ListLayout";

function App() {
  const [patietnList, setPatientList] = useState<IPatientModel[]>([]);

  const onClickHandler = async (id: string) => {
    const { response } = await patientApi.getPatientById(id);
    console.log(response);
  };

  const onDeleteClickHandler = async (id: string) => {
    const { response } = await patientApi.deletePatientById(id);
    console.log(response);
  };

  const onUpdateClickHandler = async (updateData: Partial<IPatientModel>) => {
    const newData = {
      ...updateData,
      underlyingConditions: ["123"],
    };
    const { response } = await patientApi.updatePatientById(newData);
    console.log(response);
  };

  const onCreateClickHandler = async () => {
    const newPatient: Partial<IPatientModel> = {
      name: "lee",
      gender: Gender.F,
      birthdate: 19980101,
      underlyingConditions: ["감기", "골절"],
      painAreas: ["머리", "목", "팔"],
    };

    const response = await patientApi.createPatient(newPatient);
    console.log(response);
  };

  return (
    <div className="App">
      <HeaderLayout />
      <ListLayout />
      {/* {patietnList.map((data) => (
        <div key={data._id}>
          <div onClick={() => onClickHandler(data._id)}>
            {data.name}-{data.painAreas}
          </div>
          <div onClick={() => onDeleteClickHandler(data._id)}>삭제</div>
          <div onClick={() => onUpdateClickHandler(data)}>updateData</div>
          <div onClick={() => onCreateClickHandler()}>환자 생성</div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
