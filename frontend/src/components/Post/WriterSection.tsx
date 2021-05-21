import styled from "styled-components";
import { IUser } from "types";

interface WriterSectionProps {
    writer: IUser;
}

const WriterSection = ({ writer }: WriterSectionProps) => {
    return <StyledSection>{writer.email}</StyledSection>;
};

export default WriterSection;

const StyledSection = styled.section`
    position: fixed;
    left: calc(50vw + 300px + 12px);
    top: 80px;

    width: 300px;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};
`;
