import YearDropdown from "components/Common/YearDropdown";
import { useRecoilState } from "recoil";
import { currentUserState } from "store/user";

const GraduatePresenter = () => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    const entranceYear: number = currentUser.data?.entranceYear
        ? parseInt(currentUser.data?.entranceYear)
        : 2017;
        
    return (
        <div>
            <h1>{currentUser.data?.name}님 졸업을 진심으로 축하드립니다 !</h1>
            <p>
                졸업생 계정으로 전환한 후에는 다시 재학생 계정으로 북귀할 수
                없습니다. 졸업의 순간까지 즐거웠던 학교 생활을 후배들에게
                공유하며 추억을 되새김질 해보는 시간을 가져보는 건 어떨까요 !
            </p>

            <YearDropdown name="어쩌구" startYear={entranceYear + 1} />
        </div>
    );
};

export default GraduatePresenter;
