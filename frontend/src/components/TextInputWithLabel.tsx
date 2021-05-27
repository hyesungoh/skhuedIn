import React from "react";
import styled from "styled-components";

interface TextInputWithLabelProps {
    name: string;
    maxLength?: number;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputWithLabel = ({
    placeholder,
    name,
    onChange,
    maxLength,
}: TextInputWithLabelProps) => {
    return (
        <Wrapper>
            <Input
                type="text"
                id={name}
                name={name}
                onChange={onChange}
                maxLength={maxLength ? maxLength : 100}
                required
            />
            <Placeholder htmlFor={name}>{placeholder}</Placeholder>
            <BaseSpan></BaseSpan>
            <OverSpan></OverSpan>
        </Wrapper>
    );
};

export default TextInputWithLabel;

const Wrapper = styled.div`
    position: relative;
    margin-top: 2rem;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    height: 50px;
`;

const Placeholder = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: left;
    transition: all 0.3s;

    ${Input}:focus ~ &,
    ${Input}:valid ~ & {
        transform: scale(0.8) translateY(-1rem);
    }
`;

const BaseSpan = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.background};
`;

const OverSpan = styled(BaseSpan)`
    background-color: ${({ theme }) => theme.colors.emph};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;

    ${Input}:focus ~ &,
    ${Input}:valid ~ & {
        transform: scaleX(1);
    }
`;
