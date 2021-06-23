import React from "react";
import styled from "styled-components";

import {
    ISignSettingChild,
    SettingChildDiv,
    NextBtn,
} from "pages/signinSetting/presenter/SignInSettingPresenter";

interface ICheckStatus extends ISignSettingChild {
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const CheckStatus = ({ onNextClick, status, setStatus }: ICheckStatus) => {
    const checkIsChecked = (value: string): boolean => {
        return status === value;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.id);
    };

    return (
        <SettingChildDiv>
            <RadioDiv>
                <RadioInput
                    type="radio"
                    id="Student"
                    checked={checkIsChecked("Student")}
                    onChange={onChange}
                />
                <RadioLabel htmlFor="Student">
                    <strong>재학생</strong>입니다 !
                </RadioLabel>
            </RadioDiv>
            <RadioDiv>
                <RadioInput
                    type="radio"
                    id="Graduate"
                    checked={checkIsChecked("Graduate")}
                    onChange={onChange}
                />
                <RadioLabel htmlFor="Graduate">
                    <strong>졸업생</strong>입니다 !
                </RadioLabel>
            </RadioDiv>
            {/* <RadioDiv>
                <RadioInput
                    type="radio"
                    id="Other"
                    checked={checkIsChecked("Other")}
                    onChange={onChange}
                />
                <RadioLabel htmlFor="Other">
                    그 외 <strong>관계자</strong>입니다 !
                </RadioLabel>
            </RadioDiv> */}

            <NextBtn onClick={onNextClick}>다음</NextBtn>
        </SettingChildDiv>
    );
};

export default CheckStatus;

const RadioDiv = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const RadioInput = styled.input`
    all: unset;
    width: 34px;
    height: 34px;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.bold};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.emph} inset;
    margin-right: 12px;

    transform: scale(0.5);
    opacity: 0;
    transition: all 0.3s;
    cursor: pointer;

    &:checked {
        transform: scale(1);
        opacity: 1;
    }
`;

const RadioLabel = styled.label`
    color: ${({ theme }) => theme.colors.emph};
    font-size: 1.4rem;
    font-weight: 100;
    cursor: pointer;
    transition: color 0.3s;

    & strong {
        font-weight: 700;
    }

    ${RadioInput}:checked + & {
        color: ${({ theme }) => theme.colors.bold};
    }
`;
