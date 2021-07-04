import { useRecoilValue } from "recoil";

import { currentUserState } from "store/user";

const useFollow = () => {
    const currentUser = useRecoilValue(currentUserState);

    const followUserById = () => {};

    const unfollowUserById = () => {};

    return {
        followUserById,
        unfollowUserById,
    };
};

export default useFollow;
