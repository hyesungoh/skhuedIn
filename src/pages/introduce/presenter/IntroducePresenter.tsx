import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Introduce from "components/Introduce/Introduce";
import HowTo from "components/Introduce/HowTo";
import styled from "styled-components";

const IntroducePresenter = () => {
    // 현재 보여지고 있는 주제
    const [category, setCategory] = useState<"introduce" | "howto">(
        "introduce"
    );

    // 주제 버튼 클릭 시
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        if (name === "introduce" || name === "howto") setCategory(name);
    };

    return (
        <Wrapper>
            <ContentWrapper>
                <ButtonWrapper>
                    <StyledBtn onClick={onClick} name="introduce">
                        소개
                    </StyledBtn>
                    <StyledBtn onClick={onClick} name="howto">
                        사용방법
                    </StyledBtn>
                </ButtonWrapper>

                <TransitionGroup>
                    <CSSTransition
                        key={category}
                        classNames="slide"
                        timeout={1000}
                    >
                        <div style={{ width: "768px" }}>
                            {category === "introduce" ? (
                                <Introduce />
                            ) : (
                                <HowTo />
                            )}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </ContentWrapper>
        </Wrapper>
    );
};

export default IntroducePresenter;

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.main`
    width: 768px;
    height: auto;
`;

const ButtonWrapper = styled.section`
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    margin-bottom: 12px;
`;

const StyledBtn = styled.button`
    all: unset;
    padding: 6px 8px;
    background-color: white;
    cursor: pointer;
    border-radius: 12px;

    transition: color 0.3s, background-color 0.3s;
    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
