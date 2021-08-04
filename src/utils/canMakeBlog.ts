import { ICurrentUser } from "types";
import isGraduate from "utils/isGraduate";

// 졸업을 했으며 블로그를 생성안한 유저일 때 true를 반환
const canMakeBlog = (currentUser: ICurrentUser) => {
    const isGraduated = isGraduate(currentUser);
    if (isGraduated && !currentUser.data?.isBlog) return true;
    return false;
};

export default canMakeBlog;
