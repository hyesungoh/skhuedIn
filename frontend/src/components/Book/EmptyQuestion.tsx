import theme from "style/theme";
import styled from "styled-components";

const EmptyQuestion = () => {
    return (
        <StyledDiv>
            <span>
                첫 질문의 <strong>주인공</strong>이 되어 보세요 !
            </span>
        </StyledDiv>
    );
};

export default EmptyQuestion;

const StyledDiv = styled.div`
    width: 40%;
    height: 110px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
