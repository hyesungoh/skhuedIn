import YearDropdown from "components/Common/YearDropdown";
import StyledButton from "components/StyledButton";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import styled from "styled-components";

const GraduatePresenter = () => {
    const [graduateYear, setGraduateYear] = useState<string>("2021");

    const currentUser = useRecoilValue(currentUserState);
    const entranceYear: number = currentUser.data?.entranceYear
        ? parseInt(currentUser.data?.entranceYear)
        : 2017;

    return (
        <Wrapper>
            <StyledMain>
                <StyledSection>
                    <StyledH1>
                        {currentUser.data?.name}님 졸업을 진심으로 축하드립니다
                        !
                    </StyledH1>
                    <StyledP>
                        졸업의 순간까지 즐거웠던 학교 생활을 후배들에게 공유하며
                        <br />
                        추억을 되새김질 해보는 시간을 가져보는 건 어떨까요 !
                        <br />
                        <i>
                            졸업생 계정으로 전환한 후에는 다시 재학생 계정으로
                            복귀 할 수 없습니다.
                        </i>
                    </StyledP>
                </StyledSection>

                <StyledSection>
                    <StyledH1>졸업 년도</StyledH1>
                    <YearDropdown
                        name="어쩌구"
                        startYear={entranceYear + 1}
                        graduateYear={graduateYear}
                        setGraduateYear={setGraduateYear}
                    />
                </StyledSection>

                <StyledButton type="submit" label="등록" />
            </StyledMain>
        </Wrapper>
    );
};

export default GraduatePresenter;

const Wrapper = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledMain = styled.main`
    width: 578px;
    padding: 10px 12px;
    background-color: white;

    display: flex;
    flex-direction: column;
`;

const StyledSection = styled.section`
    margin-bottom: 24px;
`;

const StyledH1 = styled.h1`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.bold};
`;

const StyledP = styled.p`
    font-size: 12px;
    opacity: 0.7;
`;
