import { AxiosError, AxiosResponse } from "axios";
import { IPatientModel, ISearchPatientReq } from "../../models/patient";
import BaseApoi from "../baseApi";
import useStore from "../../store/store";

class PatientApi extends BaseApoi<IPatientModel> {
  resource: string;

  constructor(resource: string) {
    super(resource);
    this.resource = resource;
  }

  async getAllPatient(): Promise<IPatientModel[]> {
    try {
      const response = await this.axiosInstance.get(this.resource);

      const setPatients = useStore.getState().setPatients;
      setPatients(response.data);

      return response.data;
    } catch (e: any) {
      return e;
    }
  }

  async getPatientById(id: string): Promise<{
    response: null | AxiosResponse<IPatientModel>;
    error: null | AxiosError;
  }> {
    try {
      const response = await this.axiosInstance.get(
        `${this.resource}/id/${id}`
      );
      return { response, error: null };
    } catch (e: any) {
      return { response: null, error: e };
    }
  }

  async getPatientListBySearch(searchReq: ISearchPatientReq): Promise<IPatientModel[]> {
    try {
      const response = await this.axiosInstance.get(`${this.resource}/search`, {
        params: searchReq,
      });
      return response.data;
    } catch (e: any) {
      return e;
    }
  }

  async deletePatientById(id: string): Promise<{
    response: AxiosResponse<boolean> | null;
    error: null | AxiosError;
  }> {
    try {
      const response = await this.axiosInstance.delete(
        `${this.resource}/${id}`
      );
      return { response, error: null };
    } catch (e: any) {
      return { response: null, error: e };
    }
  }

  async updatePatientById(updateData: Partial<IPatientModel>): Promise<{
    response: AxiosResponse<IPatientModel> | null;
    error: AxiosError | null;
  }> {
    try {
      const response = await this.axiosInstance.patch(
        `${this.resource}/${updateData._id}`,
        updateData
      );
      return { response, error: null };
    } catch (e: any) {
      return { response: null, error: e };
    }
  }

  async createPatient(newPatient: Partial<IPatientModel>): Promise<{
    response: AxiosResponse<IPatientModel> | null;
    error: AxiosError | null;
  }> {
    try {
      const response = await this.axiosInstance.post(
        `${this.resource}`,
        newPatient
      );
      return { response, error: null };
    } catch (e: any) {
      return { response: null, error: e };
    }
  }
}

export default new PatientApi("patient");
