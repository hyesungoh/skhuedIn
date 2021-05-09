import {
    ISignSettingChild,
    SettingChildDiv,
} from "pages/signinSetting/presenter/SignInSettingPresenter";
import styled from "styled-components";

const CheckStatus = ({ onNextClick }: ISignSettingChild) => {
    return (
        <SettingChildDiv>
            <div className="signinform__input">
                <input
                    className="signinform__input__tag"
                    type="text"
                    required
                />
                <label className="signinform__input__placeholder">
                    어쩌구 저쩌구
                </label>
            </div>
            <NextBtn onClick={onNextClick}>다음</NextBtn>
        </SettingChildDiv>
    );
};

export default CheckStatus;

const NextBtn = styled.button`
    all: unset;

    position: absolute;
    bottom: 0;
    right: 0;
`;
