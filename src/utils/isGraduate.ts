import { ICurrentUser } from "types";

const isGraduate = (currentUser: ICurrentUser) => {
    if (!currentUser.data) return false;
    if (currentUser.data?.graduationYear !== "0") return true;
    return false;
};

export default isGraduate;
