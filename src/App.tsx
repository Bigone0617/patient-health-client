import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import patientApi from "./api/patient/patientApi";
import HeaderLayout from "./layout/HeaderLayout";
import ListLayout from "./layout/ListLayout";

function App() {
  const { data, isFetched } = useQuery({
    queryKey: ["patient"],
    queryFn: () => patientApi.getAllPatient(),
    refetchOnWindowFocus: true,
  });

  return (
    <div className="App">
      {
        data && isFetched ? (
          <>
            <HeaderLayout />
            <ListLayout />
          </>
        ): (
          <>loading...</>
        )
      }
      
    </div>
  );
}

export default App;
