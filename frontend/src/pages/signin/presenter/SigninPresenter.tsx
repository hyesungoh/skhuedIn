import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "pages/SignIn/SignIn.scss";

const SignInPresenter = () => {
    return (
        <div className="center">
            <div className="signinform">
                <div className="signinform__text">
                    <span>스쿠드인에 로그인하고 취뽀하기</span>
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

                <div className="signinform__social">
                    <FontAwesomeIcon
                        icon={faGoogle}
                        size="4x"
                        className="social__icon"
                    />

                    <FontAwesomeIcon
                        icon={faFacebook}
                        size="4x"
                        className="social__icon"
                    />

                    <FontAwesomeIcon
                        icon={faGithub}
                        size="4x"
                        className="social__icon"
                    />
                </div>

                <span className="signinform__link">
                    아직 회원이 아니신가요?{" "}
                    <Link to="/signup">회원가입 하러가기</Link>
                </span>

                <button className="signinform__btn">Sign In</button>
            </div>
        </div>
    );
};

export default SignInPresenter;
