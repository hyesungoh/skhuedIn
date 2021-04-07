// Action Type
const SIGNIN = "user/SIGNIN" as const;
const SIGNOUT = "user/SIGNOUT" as const;
const SIGNIN_BY = "user/SIGNIN_BY" as const;

export const signin = () => ({ type: SIGNIN });

export const signout = () => ({ type: SIGNOUT });

export const signinBy = (diff: string) => ({
    type: SIGNIN_BY,
    payload: diff,
});

type UserAction =
    | ReturnType<typeof signin>
    | ReturnType<typeof signout>
    | ReturnType<typeof signinBy>;

export type UserState = {
    isSignedIn: boolean;
    id?: number;
    email?: string;
    name?: string;
    // provider?: string;
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
        case SIGNIN_BY:
            return { isSignedIn: true };
        default:
            return state;
    }
}

export default user;
