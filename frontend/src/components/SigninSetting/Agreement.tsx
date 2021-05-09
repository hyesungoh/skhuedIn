import {
    ISignSettingChild,
    SettingChildDiv,
} from "pages/signinSetting/presenter/SignInSettingPresenter";
import styled from "styled-components";

const Agreement = ({ onNextClick }: ISignSettingChild) => {
    const memberAgreement: string =
        "1. 본 약관의 스쿠드인 사이트가 제공하는 모든 서비스(이하 '서비스')의 이용조건 및 절차, 이용자와 스쿠드인 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다. 2. 약관의 효력과 변경 - 스쿠드인 사이트는 귀하가 본 약관 내용에 동의하는 경우 스쿠드인 사이트의 서비스 제공 행위 및 귀화의 서비스 사용 행위에 본 약관이 우선적으로 적용됩니다. - 스쿠드인 사이트는 본 약관을 사전 고지 없이 변경할 수 있고 변경된 약관은 스쿠드인 사이트 내에 공지하거나 e-mail을 통해 회원에게 공지하며, 공지와 동시에 그 효력이 발생됩니다.";

    const privacyAgreement: string =
        "스쿠드인은 개인정보보호법 제15조제1항제1호, 제17조제1항제1호, 제23조제1호, 제24조제1항 제1호에 따라 아래와 같이 개인정보의 수집, 이용에 관하여 귀하의 동의를 얻고자 합니다. 스쿠드인은 이용자의 사전 동의 없이는 이용자의 개인정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다. 이용자가 제공한 모든 정보는 아래의 목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될 시에는 이를 알리고 동의를 구할 것입니다.";

    return (
        <SettingChildDiv>
            <AgreementHeading>회원약관</AgreementHeading>
            <AgreementDiv>
                <p>{memberAgreement}</p>
            </AgreementDiv>
            <AgreementHeading>개인정보 수집 및 이용 동의</AgreementHeading>
            <AgreementDiv>
                <p>{privacyAgreement}</p>
            </AgreementDiv>

            <NextBtn onClick={onNextClick}>다음</NextBtn>
        </SettingChildDiv>
    );
};

export default Agreement;

const AgreementHeading = styled.h2`
    color: ${({ theme }) => theme.colors.emph};
    margin-bottom: 6px;
`;

const AgreementDiv = styled.div`
    width: 100%;
    height: 50px;
    overflow: scroll;
    margin-bottom: 18px;
`;

const NextBtn = styled.button`
    all: unset;

    position: absolute;
    bottom: 0;
    right: 0;
`;
