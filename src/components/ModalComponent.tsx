import React, { useState } from "react";
import styled from "styled-components";
import { Gender, IPatientModel } from "../models/patient.d";
import useStore from "../store/store";
import { SlClose } from "react-icons/sl";
import { painAreasList, underlyingConditionsList } from "../common/constants";
import patientApi from "../api/patient/patientApi";

const ModalComponent: React.FC<Partial<IPatientModel>> = (props) => {
  const store = useStore();
  const [name, setName] = useState<string>(props.name ?? "");
  const [birthdate, setBirthdate] = useState<number>(props.birthdate ?? 0);
  const [gender, setGender] = useState<Gender>(props.gender ?? Gender.M);
  const [underlyingConditions, setUnderlyingConditions] = useState<string>(
    props.underlyingConditions ?? ""
  );
  const [painAreas, setPainAreas] = useState<string[]>(props.painAreas ?? []);
  const [memo, setMemo] = useState<string>(props.memo ?? "");

  const onClickCloseHandler = () => {
    store.setShowModal(false, {});
  };

  const onClickSaveHandler = async () => {
    const editPatient: Partial<IPatientModel> = {
      name,
      birthdate,
      gender,
      underlyingConditions,
      painAreas,
      memo,
    };

    editPatient._id = props._id!!;

    const { response } = await patientApi.updatePatientById(editPatient);

    if (response?.status === 200) {
      const patientList = await patientApi.getAllPatient();
      store.setPatients(patientList);
      store.setShowModal(false, {});
      alert("저장이 됐습니다.");
    } else {
      alert("저장이 되지 않았습니다.");
      return;
    }
  };

  const handleCheckBoxChange = (option: string) => {
    const updatedOptions = painAreas.includes(option)
      ? painAreas.filter((item) => item !== option)
      : [...painAreas, option];
    setPainAreas(updatedOptions);
  };

  return (
    <ModalLayout>
      <ModalHeaderWrapper>
        <CloseIconWrapper onClick={onClickCloseHandler}>
          <SlClose />
        </CloseIconWrapper>
      </ModalHeaderWrapper>
      <ModalBodyWrapper>
        <InputTextItem label="이름" value={name} onChange={setName} />
        <InputNumberItem
          label="생년월일"
          value={birthdate}
          onChange={setBirthdate}
        />
        <RadioItem
          label="성별"
          options={[Gender.M, Gender.F]}
          value={gender}
          onChange={setGender}
        />
        <ItemWrapper>
          <LabelWrapper>기저 질환</LabelWrapper>
          <SelectItem
            value={underlyingConditions}
            onSelect={setUnderlyingConditions}
          />
        </ItemWrapper>
        <ItemWrapper isBig={true}>
          <LabelWrapper isBig={true}>통증 부위</LabelWrapper>
          <CheckItem values={painAreas} onChecked={handleCheckBoxChange} />
        </ItemWrapper>
        <ItemWrapper>
          <LabelWrapper>메모</LabelWrapper>
          <TextAreaItem value={memo} onChange={setMemo} />
        </ItemWrapper>
      </ModalBodyWrapper>
      <ModalBottomWrapper>
        <SaveButton onClick={onClickSaveHandler}>저장</SaveButton>
      </ModalBottomWrapper>
    </ModalLayout>
  );
};

const InputTextItem: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => (
  <ItemWrapper>
    <LabelWrapper>{label}</LabelWrapper>
    <InputWrapper
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </ItemWrapper>
);

const InputNumberItem: React.FC<{
  label: string;
  value: number;
  onChange: (value: number) => void;
}> = ({ label, value, onChange }) => (
  <ItemWrapper>
    <LabelWrapper>{label}</LabelWrapper>
    <InputWrapper
      type="number"
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
    />
  </ItemWrapper>
);

const RadioItem: React.FC<{
  label: string;
  options: string[];
  value: Gender;
  onChange: (value: Gender) => void;
}> = ({ label, options, value, onChange }) => (
  <ItemWrapper>
    <LabelWrapper>{label}</LabelWrapper>
    <RadioWrapper>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={(e: any) => onChange(e.target.value)}
          />
          {option === Gender.M ? "남성" : "여성"}
        </label>
      ))}
    </RadioWrapper>
  </ItemWrapper>
);

const SelectItem: React.FC<{
  value: string;
  onSelect: (value: string) => void;
}> = ({ onSelect, value }) => (
  <select value={value} onChange={(e) => onSelect(e.target.value)}>
    <option value="">선택하세요</option>
    {underlyingConditionsList.map((condition, index) => (
      <option key={index} value={condition}>
        {condition}
      </option>
    ))}
  </select>
);

const CheckItem: React.FC<{
  values: string[];
  onChecked: (value: string) => void;
}> = ({ values, onChecked }) => (
  <CheckItemWrapper>
    {painAreasList.map((option, index) => (
      <div key={index} style={{ display: "flex" }}>
        <label>
          <input
            type="checkbox"
            value={option}
            checked={values.includes(option)}
            onChange={(e) => onChecked(e.target.value)}
          />
          {option}
        </label>
      </div>
    ))}
  </CheckItemWrapper>
);

const TextAreaItem: React.FC<{
  value: string | "";
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <TextAreaWrapper
    onChange={(e: any) => onChange(e.target.value)}
    value={value}
  ></TextAreaWrapper>
);

const ModalLayout = styled.div`
  width: 60%;
  height: 60%;
  z-index: 10;
  position: absolute;
  left: 20%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  background: white;
`;

const CloseIconWrapper = styled.div`
  padding-right: 20px;
`;

const ModalHeaderWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ModalBodyWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ModalBottomWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SaveButton = styled.button`
  margin-right: 20px;
  width: 50px;
  height: 30px;
  border-radius: 10px;

  &:hover {
    background: pink;
  }
`;

const ItemWrapper = styled.div<{ isBig?: boolean }>`
  width: 100%;
  height: ${(props) => (props.isBig ? "100px" : "20px")};
  display: flex;
`;

const LabelWrapper = styled.label<{ isBig?: boolean }>`
  width: 20%;
  height: ${(props) => (props.isBig ? "100px" : "90%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.input`
  width: 70%;
  height: 80%;
`;

const RadioWrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: center;
`;

const CheckItemWrapper = styled.div`
  width: 70%;
  height: 100px;
  overflow: auto;
`;

const TextAreaWrapper = styled.textarea`
  width: 70%;
  height: 70px;
`;

export default ModalComponent;
