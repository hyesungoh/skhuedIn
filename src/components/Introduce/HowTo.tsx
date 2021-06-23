import styled from "styled-components";

const HowTo = () => {
    const forStudent = (
        <StyledSection>
            <StyledH2>재학생</StyledH2>
            <StyledUl>
                <li>Google 회원가입을 통해 유저로 가입하기</li>
                <li>졸업생들에 이야기를 책장에서 살펴보세요.</li>
                <li>
                    궁금 한 것은 졸업생의 책장,질문 란에 질의를 통해 해소하세요.
                </li>
                <li>건강한 우정을 나누길 기대합니다.</li>
            </StyledUl>
        </StyledSection>
    );

    const forGraduate = (
        <StyledSection>
            <StyledH2>졸업생</StyledH2>
            <StyledUl>
                <li>Google 회원가입을 통해 유저로 가입하기</li>
                <li>
                    책장에 책으로 등록하기
                    <br />
                    <Italic>
                        아래와 같은 3가지 주제로 나를 설명하는 과정이 필요합니다
                    </Italic>
                    <StyledOl>
                        <li>자기소개</li>
                        <li>학교 생활에 대해서</li>
                        <li>졸업 후 현재</li>
                    </StyledOl>
                </li>
                <li>질의 응답에 응하며 도와주는 기쁨을 느끼기 .. !! ^^</li>
            </StyledUl>
        </StyledSection>
    );

    return (
        <>
            <StyledSection>
                <StyledH2>이용방법</StyledH2>
                <StyledP>
                    저희 사이트는 사람 도서관이라는 주제로 서비스를
                    기획했습니다.
                    <br />한 사람의 인생은 한 권의 책과 같다고 하죠? 저희도
                    여러분 개인을 책으로 등록하고,
                    <br />그 책에 챕터를 여러분의 경험으로 채우고자 합니다.
                    책으로 등록된 여러분은 책장에 모이게 됩니다.
                    <br />
                    자발적인 참여가 운영에 큰 힘이 됩니다!
                </StyledP>
            </StyledSection>

            {forStudent}
            {forGraduate}
        </>
    );
};

export default HowTo;

const StyledSection = styled.section`
    margin-bottom: 24px;
`;

const StyledH2 = styled.h2`
    font-size: 18px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.bold};
`;

const StyledP = styled.p`
    font-size: 14px;
    white-space: pre-wrap;
    opacity: 0.7;
    line-height: 2;
`;

const Italic = styled.i`
    font-size: 12px;
    margin: 0;
`;

const StyledUl = styled.ul`
    list-style: inside square;
    margin-left: 0px;

    & > li {
        font-size: 14px;
        white-space: pre-wrap;
        opacity: 0.7;
        line-height: 2;
    }
`;

const StyledOl = styled.ol`
    list-style: inside decimal;
    margin-left: 30px;
`;
