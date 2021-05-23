import { useHistory } from "react-router-dom";
import { IUser } from "types";

const usePushSigninSetting = () => {
    const history = useHistory();

    const pushToSigninSetting = (userData: IUser, token: string) => {
        history.push({
            pathname: "/signin/setting",
            state: { userData, token },
        });
    };

    return pushToSigninSetting;
};

export default usePushSigninSetting;
