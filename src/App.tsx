import React, { useEffect, useState } from "react";
import "./App.css";
import patientApi from "./api/patient/patientApi";
import { Gender, IPatientModel } from "./models/patient.d";
import HeaderLayout from "./layout/HeaderLayout";
import ListLayout from "./layout/ListLayout";

function App() {
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
    </div>
  );
}

export default App;
