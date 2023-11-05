import { IBaseModel } from "./base";

export interface IPatientModel extends IBaseModel {
  name: string;
  gender: Gender;
  birthdate: number;
  underlyingConditions: string[];
  painAreas: string[];
  memo: string;
}

export enum Gender {
  M = "M",
  F = "F",
}

export interface ISearchPatientReq {
  searchTerm: string;
  searchField: SearchField;
}

export enum SearchField {
  NAME = "name",
  CONDITION = "underlyingConditions",
  AREA = "painAreas",
}
