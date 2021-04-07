import React, { useEffect } from "react";

import SignInPresenter from "pages/SignIn/presenter/SignInPresenter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { signin, signinBy } from "modules/user/user";
import { RouteComponentProps } from "react-router";

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

    const onSignInBy = (diff: string) => {
        dispatch(signinBy(diff));
    };

    return <SignInPresenter onSignIn={onSignIn} onSignInBy={onSignInBy} />;
};

export default SignInContainer;
