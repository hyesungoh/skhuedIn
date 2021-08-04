import { ICurrentUser } from "types";

// 로그인을 했으며, 졸업을 했을 때 true를 반환
const isGraduate = (currentUser: ICurrentUser) => {
    if (!currentUser.data) return false;
    if (currentUser.data?.graduationYear !== "0") return true;
    return false;
};

export default isGraduate;
