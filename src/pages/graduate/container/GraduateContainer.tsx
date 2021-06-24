import useUserSession from "hook/useUserSession";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import GraduatePresenter from "../presenter/GraduatePresenter";

const GraduateContainer = () => {
    const history = useHistory();
    const { isUserTokenExist } = useUserSession();
    const currentUser = useRecoilValue(currentUserState);

    // useEffect(() => {
    //     const isSignedIn = isUserTokenExist();

    //     if (isSignedIn === null || currentUser.data?.isBlog) history.push("/");
    // }, [currentUser.data?.isBlog, history, isUserTokenExist]);

    return <GraduatePresenter />;
};

export default GraduateContainer;
