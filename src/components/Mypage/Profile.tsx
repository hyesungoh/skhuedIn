import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router";

import Error from "components/Error/Error";
import { currentUserState } from "store/user";
import GraduateInfo from "./GraduateInfo";
import StudentInfo from "./StudentInfo";
import isGraduate from "utils/isGraduate";

const Profile = () => {
    const history = useHistory();
    const currentUser = useRecoilValue(currentUserState);

    // 졸업했어요 버튼 클릭 시
    const onGraduateClick = () => {
        history.push("/graduate");
    };

    // 졸업 확인
    const isGraduated = isGraduate(currentUser);

    // 유저 정보가 없을 시 에러 렌더링
    if (!currentUser.data) return <Error />;
    return (
        <StyledMain>
            <ImageAside>
                <StyledImg src={currentUser.data?.userImageUrl} alt="profile" />
            </ImageAside>
            {isGraduated ? (
                <GraduateInfo />
            ) : (
                <>
                    <StudentInfo />
                    <GraduateBtn onClick={onGraduateClick}>
                        졸업 했어요 !
                    </GraduateBtn>
                </>
            )}
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
