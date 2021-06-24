import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import GraduatePresenter from "../presenter/GraduatePresenter";

const GraduateContainer = () => {
    const history = useHistory();
    const currentUser = useRecoilValue(currentUserState);

    useEffect(() => {
        console.log(currentUser.token);
        
        if (!currentUser.token) history.push("/");
    }, [currentUser.data?.isBlog, currentUser.token, history]);

    return <GraduatePresenter />;
};

export default GraduateContainer;
