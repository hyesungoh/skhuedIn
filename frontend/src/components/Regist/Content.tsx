import styled from "styled-components";
import _ from "lodash";

import useSlide from "hook/useSlide";
import TextInputWithLabel from "components/TextInputWithLabel";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState } from "store/user";
import StyledButton from "components/StyledButton";
import React, { useState } from "react";
import { contentState, profileImageState } from "store/regist";
import useRegist from "hook/useRegist";

const Content = () => {
    const { onClickNext } = useSlide();
    const { registBlog } = useRegist();

    const currentUser = useRecoilValue(currentUserState);
    const [content, setContent] = useRecoilState(contentState);
    const setProfileImage = useSetRecoilState(profileImageState);

    const [previewImage, setPreviewImage] = useState<string>("");

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { files },
        } = e;
        const targetFile = files?.[0];
        setProfileImage(targetFile); // for recoil

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(targetFile as Blob);
    };

    const handleClear = () => {
        setPreviewImage("");
    };

    const handleDebounceChange = _.debounce(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setContent(e.target.value);
        },
        300
    );

    const handleSubmit = () => {
        if (content === "") {
            alert("자기 소개를 작성해주세요 !");
            return;
        }
        // registBlog();
        onClickNext();
    };

    return (
        <Wrapper>
            <ImageInputDiv>
                <ClearPreviewBtn onClick={handleClear} src={previewImage}>
                    비우기
                </ClearPreviewBtn>
                <PreviewImage src={previewImage} alt="" />
                <ImageInputLabel htmlFor="profileImage">
                    프로필 사진 등록
                </ImageInputLabel>
                <ImageInput
                    id="profileImage"
                    type="file"
                    onChange={handleUpload}
                />
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
                    onChange={handleDebounceChange}
                />
                <StyledButton
                    type="submit"
                    label="다음 문항"
                    onClick={handleSubmit}
                ></StyledButton>
            </Info>
        </Wrapper>
    );
};

export default Content;

const Wrapper = styled.div`
    width: 700px;
    height: 300px;

    background-color: white;

    display: flex;
`;

const ImageInputDiv = styled.div`
    position: relative;
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const PreviewImage = styled.img<{ src: string }>`
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transform: translateY(${({ src }) => (src === "" ? "100%" : "0")});
    transition: transform 1s;
`;

const ClearPreviewBtn = styled.button<{ src: string }>`
    all: unset;
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 6px 8px;
    border-radius: ${({ theme }) => theme.border_intensity};
    background-color: white;
    cursor: pointer;
    z-index: 1;

    transform: translateY(${({ src }) => (src === "" ? "60px" : "0")});
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.bold};
        color: white;
    }
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

const Info = styled.div`
    width: 60%;
    height: 100%;
    padding: 12px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
