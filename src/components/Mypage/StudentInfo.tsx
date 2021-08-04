import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { currentUserState } from "store/user";

const StudentInfo = () => {
    const currentUser = useRecoilValue(currentUserState);

    return (
        <InfoSection>
            <NameDiv>
                <InfoArticle>
                    <Title>이름</Title>
                    <Info>{currentUser.data?.name}</Info>
                </InfoArticle>
            </NameDiv>
            <InfoDiv>
                <InfoArticle>
                    <Title>E-mail</Title>
                    <Info>{currentUser.data?.email}</Info>
                </InfoArticle>
                <InfoArticle>
                    <Title>입학년도</Title>
                    <Info>{currentUser.data?.entranceYear}</Info>
                </InfoArticle>
            </InfoDiv>
        </InfoSection>
    );
};

export default StudentInfo;

const InfoSection = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NameDiv = styled.div`
    width: 70%;
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
