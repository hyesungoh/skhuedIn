const useFormatedUser = () => {
    const getEmptyWhenNull = (data: string) => {
        return data ? data : "";
    };

    const getFormatedUser = (response: any, provider: string) => {
        const currentUserState = {
            isSigned: true,
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

    return getFormatedUser;
};

export default useFormatedUser;
