import React, { useEffect } from "react";
import { useLocation, RouteComponentProps } from "react-router-dom";

import Loading from "components/Loading/Loading";

const SignInNaverContainer = ({ history }: RouteComponentProps) => {
    const location = useLocation();

    useEffect(() => {
        const getNaverToken = () => {
            if (!location.hash) history.push("/sign");
            const token = location.hash.split("=")[1].split("&")[0];

            console.log("NAVER LOGIN SUCCESS");
            console.log(token);
            // token 값으로 axios 호출 후 history.push()
        };

        getNaverToken();
    }, []);

    return <Loading />;
};

export default SignInNaverContainer;
