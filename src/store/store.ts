import create from "zustand";
import { IPatientModel } from "../models/patient";

type Store = {
  patients: IPatientModel[] | [];
  setPatients: (newPatients: IPatientModel[] | []) => void;
  showModal: {isShow: boolean, props: Partial<IPatientModel>};
  setShowModal: (toggle: boolean, props: Partial<IPatientModel>) => void;
};

const useStore = create<Store>((set) => ({
  patients: [],
  setPatients(newPatients: IPatientModel[] | []) {
    set((state) => ({
      ...state,
      patients: newPatients,
    }));
  },
  showModal: {isShow: false, props: {}},
  setShowModal(toggle: boolean, props: Partial<IPatientModel>) {
    set((state) => ({
      ...state,
      showModal: {isShow: toggle, props}
    }))
  }
}));

export default useStore;
