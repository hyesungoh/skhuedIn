// text for login
// import SignInput from "components/Sign/SignInput";

// social login to fontAwesomeIcon
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";

import logoGoogle from "static/images/google.png";
import logoKakao from "static/images/kakao.png";

import "pages/signIn/SignIn.scss";

interface ISignInPresenter {
    onGoogleLogin: (result: any) => void;
    onKakaoLogin: () => void;
    initializeNaverLogin: () => void;
}

const SignInPresenter = ({
    onGoogleLogin,
    onKakaoLogin,
    initializeNaverLogin,
}: ISignInPresenter) => {
    useEffect(() => {
        initializeNaverLogin();
    }, []);

    return (
        <div className="center">
            <div className="signinform">
                <div className="signinform__text">
                    <span>
                        SKHUED <strong>IN</strong>에 로그인하고{" "}
                        <strong>취뽀</strong>하기
                    </span>
                </div>

                <div className="signinform__social">
                    <GoogleLogin
                        clientId={
                            process.env.REACT_APP_GOOGLE_CLIENT_ID as string
                        }
                        onSuccess={(result) => onGoogleLogin(result)}
                        onFailure={(result) => console.log(result)}
                        cookiePolicy={"single_host_origin"}
                        render={(props: any) => (
                            <div
                                className="signinform__social__logo"
                                onClick={props.onClick}
                            >
                                <img src={logoGoogle} alt="google" />
                            </div>
                        )}
                    />

                    <div
                        id="kakao"
                        className="signinform__social__logo"
                        onClick={onKakaoLogin}
                    >
                        <img src={logoKakao} alt="kakao" />
                    </div>

                    <div className="signinform__social__logo">
                        <div id="naverIdLogin"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPresenter;
