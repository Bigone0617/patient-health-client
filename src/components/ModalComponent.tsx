import React from 'react';
import styled from 'styled-components';
import { Gender, IPatientModel } from '../models/patient.d';
import useStore from '../store/store';
import  {SlClose} from 'react-icons/sl'

const ModalComponent:React.FC<Partial<IPatientModel>> = (props) => {
    const store = useStore();

    const onClickCloseHandler = () => {
        store.setShowModal(false, {});
    }
    
    const onClickSaveHandler = () => {
        alert('저장');
    }
    return (<ModalLayout>
        <ModalHeaderWrapper>
            <CloseIconWrapper onClick={onClickCloseHandler}>
                <SlClose/>
            </CloseIconWrapper>
        </ModalHeaderWrapper>
        <ModalBodyWrapper>
            <div>
                <label>이름</label>
                <input type="text"></input>
            </div>
            <div>
                <label>생년월일</label>
                <input type="text"></input>
            </div>
            <div>
                <label>성별</label>
                
                <label>남성</label>
                <input type="radio" name="gender" value={Gender.M}></input>

                <label>여성</label>
                <input type="radio" name="gender" value={Gender.F}></input>
            </div>
        </ModalBodyWrapper>
        <ModalBottomWrapper>
            <SaveButton onClick={onClickSaveHandler}>저장</SaveButton>
        </ModalBottomWrapper>
    </ModalLayout>)
}

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
`

const CloseIconWrapper = styled.div`
    padding-right: 20px;
`

const ModalHeaderWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: end;
`

const ModalBodyWrapper = styled.div`
    width: 100%;
    height: 80%;
`

const ModalBottomWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: end;
`

const SaveButton = styled.button`
    margin-right: 20px;
    width: 50px;
    height: 30px;
    border-radius: 10px;

    &:hover {
        background: pink;
    }
`


export default ModalComponent;