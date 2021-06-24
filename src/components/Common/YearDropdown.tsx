import React, { useRef } from "react";
import styled from "styled-components";

interface YearDropdownProps {
    name: string;
    startYear?: number;
}

const YearDropdown = ({ name, startYear = 2000 }: YearDropdownProps) => {
    const CheckBokRef = useRef<HTMLInputElement>(null);

    const date = new Date();
    const currentYear: number = date.getFullYear();
    const yearDiff: number = currentYear - startYear + 1;

    const YearList: number[] = Array.from(
        { length: yearDiff },
        (_, i) => startYear + i
    );

    const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (CheckBokRef.current) CheckBokRef.current.checked = false;
        console.log((e.target as Element).id);
    };

    return (
        <InputDiv>
            <InputCheckbox id={name} type="checkbox" ref={CheckBokRef} />
            <SelectLabel htmlFor={name}>{name}</SelectLabel>
            <BackSpan />
            <OverSpan />
            <CandidateDiv>
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
};

export default YearDropdown;

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
    height: auto;
    max-height: 300px;
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
