// Action Type
const SIGNIN = "user/SIGNIN" as const;
const SIGNOUT = "user/SIGNOUT" as const;

export const signin = (response: UserState) => ({
    type: SIGNIN,
    state: response,
});

export const signout = () => ({ type: SIGNOUT });

type UserAction = ReturnType<typeof signin> | ReturnType<typeof signout>;

export type UserState = {
    isSignedIn: boolean;
    id?: number;
    provider?: string;
    email?: string;
    name?: string;
    userImageUrl?: string;
    entranceYear?: string;
    graduationYear?: string;
};

const initialState: UserState = {
    isSignedIn: false,
};

function user(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {
        case SIGNIN:
            return { isSignedIn: true };
        case SIGNOUT:
            return { isSignedIn: false };
        default:
            return state;
    }
}

export default user;
