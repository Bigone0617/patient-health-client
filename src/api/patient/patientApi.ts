import { AxiosError, AxiosResponse } from "axios";
import { IPatientModel } from "../../models/patient";
import BaseApoi from "../baseApi";

class PatientApi extends BaseApoi<IPatientModel> {
  resource: string;

  constructor(resource: string) {
    super(resource);
    this.resource = resource;
  }

  async getAllPatient(): Promise<{
    response: null | AxiosResponse<IPatientModel[]>;
    error: null | AxiosError;
  }> {
    try {
      const response = await this.axiosInstance.get(this.resource);
      return { response, error: null };
    } catch (e: any) {
      return { response: null, error: e };
    }
  }

  async getPatientById(id: string): Promise<{
    response: null | AxiosResponse<IPatientModel>;
    error: null | AxiosError;
  }> {
    try {
      const response = await this.axiosInstance.get(`${this.resource}/${id}`);
      return { response, error: null };
    } catch (e: any) {
      return { response: null, error: e };
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

  async createPatient(
    newPatient: Partial<IPatientModel>
  ): Promise<{
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
