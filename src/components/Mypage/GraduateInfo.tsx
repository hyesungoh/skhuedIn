import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { currentUserState } from "store/user";

const GraduateInfo = () => {
    const currentUser = useRecoilValue(currentUserState);

    return (
        <InfoSection>
            <InfoDiv>
                <InfoArticle>
                    <Title>이름</Title>
                    <Info>{currentUser.data?.name}</Info>
                </InfoArticle>
                <InfoArticle>
                    <Title>E-mail</Title>
                    <Info>{currentUser.data?.email}</Info>
                </InfoArticle>
            </InfoDiv>
            <InfoDiv>
                <InfoArticle>
                    <Title>입학년도</Title>
                    <Info>{currentUser.data?.entranceYear}</Info>
                </InfoArticle>
                <InfoArticle>
                    <Title>졸업년도</Title>
                    <Info>{currentUser.data?.graduationYear}</Info>
                </InfoArticle>
            </InfoDiv>
        </InfoSection>
    );
};

export default GraduateInfo;

const InfoSection = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InfoDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`;

const InfoArticle = styled.article`
    width: 30%;
    height: 80px;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h3`
    color: ${({ theme }) => theme.colors.bold};
    font-size: 18px;
`;

const Info = styled.span`
    font-size: 16px;
`;
