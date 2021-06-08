import styled from "styled-components";
import { useRecoilState } from "recoil";
import _ from "lodash";

import { suggestionState } from "store/suggestion";
import TextAreaWithLabel from "components/TextAreaWithLabel";
import TextInputWithLabel from "components/TextInputWithLabel";
import StyledButton from "components/StyledButton";
import useSuggestion from "hook/useSuggestion";

const SuggestionPresenter = () => {
    const [suggestion, setSuggestion] = useRecoilState(suggestionState);
    const { createSuggestion } = useSuggestion();

    const handleDebounceChange = _.debounce(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setSuggestion({ ...suggestion, [e.target.name]: e.target.value });
        },
        300
    );

    return (
        <Wrapper>
            <Box>
                <Heading>서비스 이용에 불편한 점을 말해주세요</Heading>
                <Notify>
                    작성된 모든 사항은 <strong>익명</strong>이며, 관리자만 확인할 수 있습니다.
                </Notify>
                <InputWrapper>
                    <TextInputWithLabel
                        name="title"
                        placeholder="제목"
                        onChange={handleDebounceChange}
                    />
                    <TextAreaWithLabel
                        name="content"
                        placeholder="내용"
                        onChange={handleDebounceChange}
                    />
                    <StyledButton
                        type="submit"
                        label="보내기"
                        onClick={createSuggestion}
                    />
                </InputWrapper>
            </Box>
        </Wrapper>
    );
};

export default SuggestionPresenter;

const Wrapper = styled.main`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.section`
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
