import {
    
    SettingChildDiv,
    NextBtn,
} from "pages/signinSetting/presenter/SignInSettingPresenter";

interface IWriteYear {
    onSignin: () => void;
};

const WriteYear = ({ onSignin }: IWriteYear) => {
    return (
        <SettingChildDiv>
            <NextBtn onClick={onSignin}>다음</NextBtn>
        </SettingChildDiv>
    );
};

export default WriteYear;
