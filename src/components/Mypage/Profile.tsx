import Error from "components/Error/Error";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import styled from "styled-components";

const Profile = () => {
    const currentUser = useRecoilValue(currentUserState);

    if (!currentUser.data) return <Error />;

    return (
        <StyledMain>
            <ImageAside>
                <StyledImg src={currentUser.data?.userImageUrl} alt="profile" />
            </ImageAside>
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
            <GraduateBtn>졸업 했어요 !</GraduateBtn>
        </StyledMain>
    );
};

export default Profile;

const StyledMain = styled.main`
    position: relative;
    width: 768px;
    border-radius: ${({ theme }) => theme.border_intensity};
    background-color: white;
    padding: 12px 14px;

    display: flex;
    align-items: center;
`;

const ImageAside = styled.aside`
    width: 200px;
    height: 200px;
    float: left;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

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

const GraduateBtn = styled.button`
    all: unset;
    text-align: center;
    font-size: 14px;

    position: absolute;
    right: 0;
    bottom: -52px;
    padding: 12px 16px;
    align-self: flex-end;
    cursor: pointer;

    background-color: white;
    border-radius: ${({ theme }) => theme.border_intensity};
    transition: color 0.3s, background-color 0.3s;

    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
