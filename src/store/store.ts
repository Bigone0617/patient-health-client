import create from "zustand";
import { IPatientModel } from "../models/patient";

type Store = {
  patients: IPatientModel[];
  setPatients: (newPatients: IPatientModel[]) => void;
};

const useStore = create<Store>((set) => ({
  patients: [],
  setPatients(newPatients: IPatientModel[]) {
    set((state) => ({
      ...state,
      patients: newPatients,
    }));
  },
}));

export default useStore;
