import { useHistory } from "react-router-dom";
import { UserState } from "modules/user/user";

const usePushSigninSetting = () => {
    const history = useHistory();

    const pushToSigninSetting = (userData: UserState, token: string) => {
        history.push({
            pathname: "signin/setting",
            state: { userData, token },
        });
    };

    return pushToSigninSetting;
};

export default usePushSigninSetting;
