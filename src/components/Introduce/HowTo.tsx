import React from "react";
import styled from "styled-components";
import ForGraduate from "./ForGraduate";
import ForStudent from "./ForStudent";

const HowTo = () => {
    return (
        <>
            <StyledSection>
                <StyledH2>이용방법</StyledH2>
                <StyledP>
                    저희 사이트는 사람 도서관이라는 주제로 서비스를
                    기획했습니다. 한 사람의 인생은 한 권의 책과 같다고 하죠?
                    저희도 여러분 개인을 책으로 등록하고, 그 책에 챕터를
                    여러분의 경험으로 채우고자 합니다. 책으로 등록된 여러분은
                    책장에 모이게 됩니다. 자발적인 참여가 운영에 큰 힘이 됩니다!
                </StyledP>
            </StyledSection>

            <StyledSection>
                <ForStudent />
            </StyledSection>
            <StyledSection>
                <ForGraduate />
            </StyledSection>
        </>
    );
};

export default HowTo;

const StyledSection = styled.section`
    margin-bottom: 24px;
`;

const StyledH2 = styled.h2`
    margin-bottom: 4px;
`;

const StyledP = styled.p`
    white-space: pre-wrap;
`;
