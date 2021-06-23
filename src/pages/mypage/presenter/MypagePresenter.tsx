import styled from "styled-components";
import Profile from "components/Mypage/Profile";

const MypagePresenter = () => {
    return (
        <StyledMain>
            <Profile />
        </StyledMain>
    );
};

export default MypagePresenter;

const StyledMain = styled.main`
    width: 100vw;
    height: 70vh;
    padding: ${({ theme }) => theme.layout_padding};
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
`;
