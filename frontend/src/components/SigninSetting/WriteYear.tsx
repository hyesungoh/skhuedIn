import React, { useRef } from "react";
import styled from "styled-components";

import {
    SettingChildDiv,
    NextBtn,
} from "pages/signinSetting/presenter/SignInSettingPresenter";

interface IWriteYear {
    status: string;
    onSignin: () => void;
    entranceYear: number;
    setEntranceYear: React.Dispatch<React.SetStateAction<number>>;
    graduationYear: number;
    setGraduationYear: React.Dispatch<React.SetStateAction<number>>;
}

const WriteYear = ({
    status,
    onSignin,
    entranceYear,
    setEntranceYear,
    graduationYear,
    setGraduationYear,
}: IWriteYear) => {
    const entranceCheckRef = useRef<HTMLInputElement>(null);
    const graduationCheckRef = useRef<HTMLInputElement>(null);

    const date = new Date();
    const startYear: number = 2000;
    const currentYear: number = date.getFullYear();
    const yearDiff: number = currentYear - startYear + 1;

    const YearList: number[] = Array.from(
        { length: yearDiff },
        (_, i) => startYear + i
    );

    const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        switch ((e.target as Element).parentElement?.id) {
            case "entranceYear":
                setEntranceYear(parseInt((e.target as Element).id));
                if (entranceCheckRef.current)
                    entranceCheckRef.current.checked = false;
                break;

            case "graduationYear":
                const selectYear = parseInt((e.target as Element).id);
                if (entranceYear >= selectYear) {
                    alert("선택 할 수 없는 년도 입니다.");
                    return;
                }
                setGraduationYear(selectYear);
                if (graduationCheckRef.current)
                    graduationCheckRef.current.checked = false;
                break;
        }
    };

    const InputElementByCategory = (category: string) => (
        <InputDiv>
            <InputCheckbox
                id={category}
                type="checkbox"
                ref={
                    category === "entrance"
                        ? entranceCheckRef
                        : graduationCheckRef
                }
            />
            <SelectLabel htmlFor={category}>
                {category === "entrance" ? entranceYear : graduationYear}
            </SelectLabel>
            <BackSpan />
            <OverSpan />
            <CandidateDiv id={`${category}Year`}>
                {YearList.map((year, index) => (
                    <CandidateSpan
                        id={year.toString()}
                        key={index}
                        onClick={onClick}
                    >
                        {year}
                    </CandidateSpan>
                ))}
            </CandidateDiv>
        </InputDiv>
    );

    if (status === "Graduate")
        return (
            <SettingChildDiv>
                <InputH2>
                    <strong>입학</strong> 년도
                </InputH2>
                {InputElementByCategory("entrance")}
                <InputH2>
                    <strong>졸업</strong> 년도
                </InputH2>
                {InputElementByCategory("graduation")}
                <NextBtn onClick={onSignin}>다음</NextBtn>
            </SettingChildDiv>
        );

    return (
        <SettingChildDiv>
            <InputH2>
                <strong>입학</strong> 년도
            </InputH2>
            {InputElementByCategory("entrance")}
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

const InputH2 = styled.h2`
    font-size: 1.3rem;
    font-weight: 300;
`;

const InputCheckbox = styled.input`
    all: unset;
`;

const SelectLabel = styled.label`
    width: 100%;
    margin-left: 6px;
    font-size: 1.3rem;
    cursor: pointer;
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

    display: flex;
    flex-direction: column;
    /* gap: 8px; */

    width: 100%;
    height: 300px;
    background-color: white;
    /* padding: 6px; */
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

const CandidateSpan = styled.span`
    display: flex;
    align-items: center;

    flex-shrink: 0;
    width: 100%;
    height: 50px;
    padding: 6px;

    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
