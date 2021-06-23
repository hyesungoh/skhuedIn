import { useEffect } from "react";
import Loading from "components/Loading/Loading";

import useSocialLogin from "hook/useSocialLogin";

const SignInNaverContainer = () => {
    const { OnNaverLogin } = useSocialLogin();

    useEffect(() => {
        OnNaverLogin();
    }, [OnNaverLogin]);

    return <Loading />;
};

export default SignInNaverContainer;
