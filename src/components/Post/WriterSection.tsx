import { useHistory } from "react-router";
import styled from "styled-components";
import { IUser } from "types";

interface WriterSectionProps {
    writer: IUser;
    blogId: number;
}

const WriterSection = ({ writer, blogId }: WriterSectionProps) => {
    const history = useHistory();

    const onNameClick = () => {
        history.push(`/library/${blogId}`);
    };

    return (
        <StyledSection>
            <ProfileImageDiv
                onClick={onNameClick}
                style={{ cursor: "pointer" }}
            >
                <ProfileImage
                    src={writer.userImageUrl}
                    alt={`${writer.name} profile image`}
                />
            </ProfileImageDiv>
            <ProfileInfoDiv>
                <BoldSpan onClick={onNameClick} style={{ cursor: "pointer" }}>
                    {writer.name}
                </BoldSpan>
                <SoftSpan>{writer.email}</SoftSpan>

                <ProfileYearDiv>
                    <ProfileSeparatedDiv>
                        <BoldSpan>입학 년도</BoldSpan>
                        <SoftSpan>{writer.entranceYear}</SoftSpan>
                    </ProfileSeparatedDiv>
                    <ProfileSeparatedDiv>
                        <BoldSpan>졸업 년도</BoldSpan>
                        <SoftSpan>{writer.graduationYear}</SoftSpan>
                    </ProfileSeparatedDiv>
                </ProfileYearDiv>
            </ProfileInfoDiv>
        </StyledSection>
    );
};

export default WriterSection;

const StyledSection = styled.section`
    position: sticky;
    top: 90px;

    width: 300px;
    height: 320px;
    padding: 10px 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const BoldSpan = styled.span`
    font-size: 1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.bold};
    }
`;

const ProfileImageDiv = styled.div`
    position: relative;
    overflow: hidden;

    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.emph};
    margin-bottom: 8px;

    &:hover ~ ${ProfileInfoDiv} > ${BoldSpan} {
        color: ${({ theme }) => theme.colors.bold};
    }
`;

const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SoftSpan = styled.span`
    font-size: 0.8rem;
    opacity: 0.5;
`;

const ProfileYearDiv = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
`;

const ProfileSeparatedDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
