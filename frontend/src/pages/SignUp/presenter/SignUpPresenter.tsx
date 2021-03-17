import React from "react";

const SignUpPresenter = () => {
    return (
        <div className="center">
            <div className="signinform signupform">
                <div className="signinform__text">
                    <span>회원가입</span>
                </div>

                <div className="signinform__input">
                    <input
                        type="e-mail"
                        className="signinform__input__tag"
                        required
                    />
                    <span className="signinform__input__placeholder">
                        E-mail
                    </span>
                </div>

                <div className="signinform__input">
                    <input
                        type="text"
                        className="signinform__input__tag"
                        required
                    />
                    <span className="signinform__input__placeholder">ID</span>
                </div>

                <div className="signinform__input">
                    <input
                        type="text"
                        className="signinform__input__tag"
                        required
                    />
                    <span className="signinform__input__placeholder">
                        Password
                    </span>
                </div>

                <div className="signinform__input">
                    <input
                        type="text"
                        className="signinform__input__tag"
                        required
                    />
                    <span className="signinform__input__placeholder">
                        Password Confirm
                    </span>
                </div>

                <div className="signinform__text">
                    <span>개인정보</span>
                </div>

                <div className="signinform__input">
                    <input
                        type="text"
                        className="signinform__input__tag"
                        required
                    />
                    <span className="signinform__input__placeholder">학과</span>
                </div>

                <div className="signinform__input">
                    <input
                        type="text"
                        className="signinform__input__tag"
                        required
                    />
                    <span className="signinform__input__placeholder">
                        추가적으로 설정
                    </span>
                </div>

                <button type="submit" className="signinform__btn">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUpPresenter;
