// import { useRecoilValue } from "recoil";
// import { currentUserState } from "store/user";

const useFollow = () => {
    // const currentUser = useRecoilValue(currentUserState);

    const toggleFollowUser = ({ targetUserId }: { targetUserId: number }) => {
        console.log(targetUserId);
        window.alert("아직 지원하지 않는 기능입니다.");
    };



    return { toggleFollowUser };
};

export default useFollow;
