import styled from "styled-components";

const Introduce = () => {
    const introduction = (
        <StyledSection>
            <StyledH2>안녕하세요 여러분 !</StyledH2>
            <StyledP>
                자랑스러운 소프트웨어공학부 졸업생 – 재학생 동문 커뮤니티
                <Strong> 스쿠드인</Strong> 입니다.
                <br />
                다들 잘 지내시는지, 어떤 일로 하루를 보내고 계신지 궁금한 것이
                많은데
                <br />
                연락하기가 왜이리 어려워지는지 모르겠습니다.
                <br />
                저희는 여러분이 머물러 간 흔적 속에서, 익숙했던 얼굴들을
                이따금씩 그리워하며. 졸업을 향하고 있습니다.
                <br />
                여러분이 있을 때에는 고민이 생기면 느티아래에서, 정보과학관에서,
                마주치는 선배들을 붙잡고
                <br />참 재미난 얘기를 많이 했던 것 같은데 이제는 그러지 못해
                너무 아쉽습니다.
            </StyledP>
        </StyledSection>
    );

    const body = (
        <StyledSection>
            <StyledP>
                저희 스쿠드인은 <Strong>졸업생, 재학생 간 소통</Strong>을 할 수
                있는 창구를 만들어
                <br />
                위와 같은 아쉬움을 조금이나마 해소하고자 만든 사이트 입니다.
                <br />
                서비스를 사용하시면서 여러분이 얻을 수 있는 이점과 기대하는 점을
                <br />
                졸업생 / 재학생 별로 나누어 보았습니다.
                <br />
                잠시나마 머물면서 즐거우셨으면 좋겠습니다.
            </StyledP>
        </StyledSection>
    );

    const forGraduate = (
        <StyledSection>
            <StyledH2>졸업생분들께</StyledH2>
            <StyledP>
                대다수의 선배님들이 힘든 시기를 보내고, 취업을 하셨을 것으로
                예상이 됩니다.
                <br />
                <Italic>
                    회사 생활은 끝나지 않는 조별과제처럼 힘들다 던데..
                    (존경스럽습니다.)
                </Italic>
                <br />
                본론으로 들어가, 많은 후배들이 진로나 미래에 대한 고민이
                많습니다.
                <br />
                선배님들이 지나오신 길을 후배들과 공유해주시면 어떨까요?
                <br />
                짧은 한 마디라도 후배들이 나아갈 방향이 될 수도, 무거운 마음이
                조금이나마 덜어질 수도 있습니다. <br />
                ‘라떼는 ~ 도 괜찮습니다. ^^‘ ‘자랑도 OK!! ‘ 힘들게 일궈낸 지난
                날에 대해서 얘기해주세요! <br />
                지친 회사 생활 속에서 잠시나마 지난 학교 생활을 추억할 수 있는
                시간을 보내시길 기대합니다. 감사합니다.
            </StyledP>
        </StyledSection>
    );

    const forStudent = (
        <StyledSection>
            <StyledH2>재학생분들께</StyledH2>
            <StyledP>
                "직업을 갖기 위해 해야할 준비는 무엇인가? , 선택할 때 어떤
                가치를 더 중요시 할 것인가."
                <br />
                고학년이 되어 한번쯤은 고민했을 주제입니다. 정답이 없는
                고민이라, 쉽게 결론내지 못하고 답답하고 힘드시죠? <br />
                이런 고민들을 먼저 했던 선배들에게 물어보세요. <br />
                정답을 알려고 하지 말고, 이런 방법도 있구나 ~ 참고 목적으로
                질의를 해주시면 좋을 것 같습니다. <br />
                모두가 힘든 시기가 찾아옵니다. 이 위기를 타파해서 무용담을 들려
                줄 수 있는 졸업생으로 성장하길 기대합니다.
            </StyledP>
        </StyledSection>
    );

    const forAll = (
        <StyledSection>
            <StyledH2>모두에게 바라는 점!</StyledH2>
            <StyledP>
                자발적인 참여가 운영에 큰 힘이 됩니다.
                <br />
                여러분 모두 건강하세요. 힘들면 쉬시고, 힘내서 다시 방문해주세요.
                <br />
                모두에게 편안한 공간이 되기 위해서, 배려하며 이용하길
                기대합니다.
            </StyledP>
        </StyledSection>
    );

    return (
        <>
            {introduction}
            {body}
            {forGraduate}
            {forStudent}
            {forAll}
        </>
    );
};

export default Introduce;

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
    line-height: 2.0;
`;

const Italic = styled.i`
    font-size: 12px;
    margin: 0;
`;

const Strong = styled.strong``;
