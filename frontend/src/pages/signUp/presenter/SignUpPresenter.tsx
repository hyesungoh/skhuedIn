import { useState } from "react";
import SignInput from "components/Sign/SignInput";

const SignUpPresenter = () => {
    // 이메일, 비번, 이름, (프로필사진), 입학년도, 졸업년도,
    const [email, setEmail] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [entranceYear, setEntranceYear] = useState<string>("");
    const [graduationYear, setGraduationYear] = useState<string>("");

    return (
        <div className="center">
            <div className="signinform signupform">
                <div className="signinform__text">
                    <span>회원가입</span>
                </div>

                <SignInput type="e-mail" text="E-mail" setState={setEmail} />
                <SignInput text="ID" setState={setId} />
                <SignInput text="Password" setState={setPassword} />
                <SignInput
                    text="Password Confirm"
                    setState={setConfirmPassword}
                />

                <div className="signinform__text">
                    <span>개인정보</span>
                </div>

                <SignInput text="입학 년도" setState={setEntranceYear} />
                <SignInput text="졸업 년도" setState={setGraduationYear} />

                <button type="submit" className="signinform__btn">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUpPresenter;
