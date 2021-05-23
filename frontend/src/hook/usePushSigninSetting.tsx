import { useHistory } from "react-router-dom";
import { ICurrentUser } from "types";

const usePushSigninSetting = () => {
    const history = useHistory();

    const pushToSigninSetting = (userData: ICurrentUser) => {
        history.push({
            pathname: "/signin/setting",
            state: { userData },
        });
    };

    return pushToSigninSetting;
};

export default usePushSigninSetting;
