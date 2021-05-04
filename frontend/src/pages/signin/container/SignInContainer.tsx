import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signin, signinBy } from "modules/user/user";
import { RootState } from "modules";

import { RouteComponentProps } from "react-router";

import axios from "axios";

import SignInPresenter from "pages/signIn/presenter/SignInPresenter";

const SignInContainer = ({ history }: RouteComponentProps) => {
    const currentUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser.isSignedIn) {
            history.push("/");
        }
    }, []);

    const onSignIn = () => {
        dispatch(signin());
        history.push("/");
    };

    const onSignGoogle = async () => {
        const data = await axios.get("localhost:8080/auth/kakao");
        console.log(data);
    };

    const onSignInBy = (diff: string) => {
        dispatch(signinBy(diff));
    };

    return <SignInPresenter onSignIn={onSignIn} onSignInBy={onSignInBy} />;
};

export default SignInContainer;
