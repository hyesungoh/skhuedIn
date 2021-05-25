import React from "react";
import styled from "styled-components";

interface TextAreaWithLabelProps {
    placeholder: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaWithLabel = ({
    placeholder,
    name,
    onChange,
}: TextAreaWithLabelProps) => {
    return (
        <Wrapper>
            <Textarea id={name} name={name} onChange={onChange} required />
            <Placeholder htmlFor={name}>{placeholder}</Placeholder>
            <BaseSpan></BaseSpan>
            <OverSpan></OverSpan>
        </Wrapper>
    );
};

export default TextAreaWithLabel;

const Wrapper = styled.div`
    position: relative;
`;

const Textarea = styled.textarea`
    all: unset;
    width: 100%;
    height: 100px;
    margin-top: 1rem;
`;

const Placeholder = styled.label`
    position: absolute;
    top: 2rem;
    left: 0;
    transform-origin: left;
    transition: all 0.3s;

    ${Textarea}:focus ~ &,
    ${Textarea}:valid ~ & {
        transform: scale(0.7) translateY(-2rem);
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

    ${Textarea}:focus ~ &,
    ${Textarea}:valid ~ & {
        transform: scaleX(1);
    }
`;
