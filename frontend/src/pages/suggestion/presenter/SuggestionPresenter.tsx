import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { suggestionState } from "store/suggestion";
import TextAreaWithLabel from "components/TextAreaWithLabel";
import TextInputWithLabel from "components/TextInputWithLabel";
import StyledButton from "components/StyledButton";

const SuggestionPresenter = () => {
    const setSuggestion = useSetRecoilState(suggestionState);

    return (
        <Wrapepr>
            <Heading>서비스 이용에 불편한 점을 말해주세요</Heading>
            <Notify>
                작성된 모든 사항은 익명이며, 관리자만 확인할 수 있습니다.
            </Notify>
            <InputWrapper>
                <TextInputWithLabel
                    name=""
                    placeholder="제목"
                    onChange={() => {}}
                />
                <TextAreaWithLabel
                    name=""
                    placeholder="내용"
                    onChange={() => {}}
                />
                <StyledButton type="submit" label="보내기" onClick={() => {}} />
            </InputWrapper>
        </Wrapepr>
    );
};

export default SuggestionPresenter;

const Wrapepr = styled.main`
    width: 520px;
    height: auto;
    padding: 24px 18px;
    background-color: white;

    display: flex;
    flex-direction: column;
`;

const Heading = styled.h1`
    font-size: 18px;
    font-weight: 500;
`;

const Notify = styled.span`
    font-size: 12px;
    font-weight: 300;
`;

const InputWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`;
