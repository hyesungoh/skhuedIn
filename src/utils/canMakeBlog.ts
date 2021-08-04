import { ICurrentUser } from "types";
import isGraduate from "utils/isGraduate";

const canMakeBlog = (currentUser: ICurrentUser) => {
    const isGraduated = isGraduate(currentUser);
    if (isGraduated && !currentUser.data?.isBlog) return true;
    return false;
};

export default canMakeBlog;
