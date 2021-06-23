import { useState } from "react";
import styled from "styled-components";

import {
    ISignSettingChild,
    SettingChildDiv,
    NextBtn,
} from "pages/signinSetting/presenter/SignInSettingPresenter";

interface IAgreement extends ISignSettingChild {
    userName: string | undefined;
}

const Agreement = ({ onNextClick, userName }: IAgreement) => {
    const [isAgree, setIsAgree] = useState<boolean>(false);

    const onChange = () => {
        setIsAgree(!isAgree);
    };

    const checkValidation = () => {
        if (isAgree) onNextClick();
        else alert("약관 동의 부탁드립니다 !");
    };

    const memberAgreement: string =
        "1. 본 약관의 스쿠드인 사이트가 제공하는 모든 서비스(이하 '서비스')의 이용조건 및 절차, 이용자와 스쿠드인 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다. 2. 약관의 효력과 변경 - 스쿠드인 사이트는 귀하가 본 약관 내용에 동의하는 경우 스쿠드인 사이트의 서비스 제공 행위 및 귀화의 서비스 사용 행위에 본 약관이 우선적으로 적용됩니다. - 스쿠드인 사이트는 본 약관을 사전 고지 없이 변경할 수 있고 변경된 약관은 스쿠드인 사이트 내에 공지하거나 e-mail을 통해 회원에게 공지하며, 공지와 동시에 그 효력이 발생됩니다.";

    const privacyAgreement: string =
        "스쿠드인은 개인정보보호법 제15조제1항제1호, 제17조제1항제1호, 제23조제1호, 제24조제1항 제1호에 따라 아래와 같이 개인정보의 수집, 이용에 관하여 귀하의 동의를 얻고자 합니다. 스쿠드인은 이용자의 사전 동의 없이는 이용자의 개인정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다. 이용자가 제공한 모든 정보는 아래의 목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될 시에는 이를 알리고 동의를 구할 것입니다.";

    return (
        <SettingChildDiv>
            <AgreementWelcome>
                안녕하세요 <strong>{userName}</strong>님 !
            </AgreementWelcome>
            <AgreementHeading>회원약관</AgreementHeading>
            <AgreementDiv>
                <p>{memberAgreement}</p>
            </AgreementDiv>
            <AgreementHeading>개인정보 수집 및 이용 동의</AgreementHeading>
            <AgreementDiv>
                <p>{privacyAgreement}</p>
            </AgreementDiv>

            <CheckDiv>
                <Check
                    id="agreement"
                    type="checkbox"
                    checked={isAgree}
                    onChange={onChange}
                />
                <CheckLabel htmlFor="agreement">전체 약관 동의</CheckLabel>
            </CheckDiv>

            <NextBtn onClick={checkValidation}>다음</NextBtn>
        </SettingChildDiv>
    );
};

export default Agreement;

const AgreementWelcome = styled.h2`
    color: ${({ theme }) => theme.colors.emph};
    margin-bottom: 12px;
    font-weight: 100;

    & strong {
        font-weight: 700;
    }
`;

const AgreementHeading = styled.h2`
    color: ${({ theme }) => theme.colors.emph};
    font-size: 1rem;
    margin-bottom: 6px;
`;

const AgreementDiv = styled.div`
    width: 100%;
    height: 60px;
    overflow: scroll;
    margin-bottom: 18px;
`;

const CheckDiv = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Check = styled.input`
    all: unset;
    width: 1rem;
    height: 1rem;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s;

    &:checked {
        border-radius: 50%;
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.emph} inset;
        background-color: ${({ theme }) => theme.colors.bold};
    }
`;

const CheckLabel = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.emph};
    margin-left: 10px;
    cursor: pointer;
    transition: color 0.3s;

    ${Check}:checked + & {
        color: ${({ theme }) => theme.colors.bold};
    }
`;
