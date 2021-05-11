import { UserState } from "modules/user/user";

const getFormatedUser = (response: any, provider: string) => {
    const getEmptyWhenNull = (data: string) => {
        return data ? data : "";
    };

    const currentUserState: UserState = {
        isSignedIn: true,
        id: parseInt(response.id),
        provider,
        email: getEmptyWhenNull(response.email),
        name: getEmptyWhenNull(response.name),
        userImageUrl: getEmptyWhenNull(response.userImageUrl),
        entranceYear: getEmptyWhenNull(response.entranceYear),
        graduationYear: getEmptyWhenNull(response.graduationYear),
    };

    return currentUserState;
};

export default getFormatedUser;
