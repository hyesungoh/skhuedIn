import styled from "styled-components";

const Banner = () => {
    return (
        <BannerSection>
            <h1>banner section</h1>
        </BannerSection>
    );
};

export default Banner;

const BannerSection = styled.section`
    width: 100%;
    height: 400px;

    // [리팩토링 지점] .page에 붙어있는 margin을 상쇄하여 nav에 붙을 수 있도록
    transform: translateY(-20px);

    background-color: ${({ theme }) => theme.colors.emph};
`;
