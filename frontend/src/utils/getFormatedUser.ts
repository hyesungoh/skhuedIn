import { ICurrentUser } from "types";

const getEmptyWhenNull = (data: string) => {
    return data ? data : "";
};

export const getFormatedUser = (
    response: any,
    provider: string,
    token: string
) => {
    const currentUserState: ICurrentUser = {
        isSigned: false,
        token,
        data: {
            id: parseInt(response.id),
            provider,
            email: getEmptyWhenNull(response.email),
            name: getEmptyWhenNull(response.name),
            userImageUrl: getEmptyWhenNull(response.userImageUrl),
            entranceYear: getEmptyWhenNull(response.entranceYear),
            graduationYear: getEmptyWhenNull(response.graduationYear),
            createdDate: getEmptyWhenNull(response.createdDate),
            lastModifiedDate: getEmptyWhenNull(response.lastModifiedDate),
            isBlog: response.isBlog ? true : false,
        },
    };

    return currentUserState;
};
