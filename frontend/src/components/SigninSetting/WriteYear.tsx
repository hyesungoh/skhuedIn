import React from "react";
import styled from "styled-components";

import {
    SettingChildDiv,
    NextBtn,
} from "pages/signinSetting/presenter/SignInSettingPresenter";

interface IWriteYear {
    onSignin: () => void;
    entranceYear: number;
    setEntranceYear: React.Dispatch<React.SetStateAction<number>>;
    graduationYear: number;
    setGraduationYear: React.Dispatch<React.SetStateAction<number>>;
}

const WriteYear = ({
    onSignin,
    entranceYear,
    setEntranceYear,
    graduationYear,
    setGraduationYear,
}: IWriteYear) => {
    return (
        <SettingChildDiv>
            <InputDiv>
                <InputCheckbox id="entrance" type="checkbox" />
                <SelectLabel htmlFor="entrance">{entranceYear}</SelectLabel>
                <BackSpan />
                <OverSpan />
                <CandidateDiv></CandidateDiv>
            </InputDiv>
            <InputDiv>
                <InputCheckbox id="graduation" type="checkbox" />
                <label htmlFor="graduation">{graduationYear}</label>
                <CandidateDiv></CandidateDiv>
            </InputDiv>
            <NextBtn onClick={onSignin}>다음</NextBtn>
        </SettingChildDiv>
    );
};

export default WriteYear;

const InputDiv = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    /* background-color: white; */
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const InputCheckbox = styled.input`
    all: unset;
`;

const SelectLabel = styled.label`
    margin-left: 6px;
    font-size: 1.3rem;
`;

const BackSpan = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.emph};
    opacity: 0.3;
`;

const OverSpan = styled.span`
    z-index: 100;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.emph};

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;

    ${InputCheckbox}:checked ~ & {
        transform: scaleX(1);
    }
`;

const CandidateDiv = styled.div`
    position: absolute;
    top: 110%;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 300px;
    background-color: white;
    overflow: scroll;

    opacity: 0;
    transform: translateX(20px);
    visibility: hidden;
    transition: all 0.3s;

    ${InputCheckbox}:checked ~ & {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
    }
`;
