import styled from "styled-components";

import useSlide from "hook/useSlide";
import TextInputWithLabel from "components/TextInputWithLabel";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import StyledButton from "components/StyledButton";

const Content = () => {
    const currentUser = useRecoilValue(currentUserState);
    const { onClickNext } = useSlide();

    return (
        <Wrapper>
            <ImageInputDiv>
                <ImageInputLabel htmlFor="profileImage">
                    프로필 사진 등록
                </ImageInputLabel>
                <ImageInput id="profileImage" type="file" />
            </ImageInputDiv>

            <Info>
                <Greeting>
                    <h2>
                        안녕하세요 <strong>{currentUser.data?.name}</strong>님!
                    </h2>
                    <span>
                        책장 등록 후, 유용한 정보들을 후배들에게 공유해주세요 !
                    </span>
                </Greeting>

                <TextInputWithLabel
                    name="content"
                    placeholder="자기소개"
                    onChange={() => {}}
                />
                <StyledButton type="submit" label="다음 문항"></StyledButton>
            </Info>
        </Wrapper>
    );
};

export default Content;

const Wrapper = styled.div`
    width: 700px;
    height: 300px;
    padding: 12px 16px;
    background-color: white;

    display: flex;
`;

const ImageInputDiv = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageInputLabel = styled.label`
    width: 150px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s, color 0.3s;
    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;

const ImageInput = styled.input`
    all: unset;
    display: none;
`;

const Greeting = styled.div`
    width: 100%;
    height: auto;

    & > h2 {
        font-size: 18px;
        font-weight: 400;
    }
    & > span {
        font-size: 12px;
    }
`;

const Info = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const SubmitBtn = styled.button`
    all: unset;
    align-self: flex-end;
`;
