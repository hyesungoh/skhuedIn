import { useEffect } from "react";
import MyRouter from "router/router";
import { useRecoilValue } from "recoil";

import Error from "components/Error/Error";
import { errorMsgState } from "store/common";
import useUserSession from "hook/useUserSession";

function App() {
    const errorMsg = useRecoilValue(errorMsgState);
    const { getUserDataWithSession } = useUserSession();

    useEffect(() => {
        // 리랜더링 시, session의 값을 확인해서 로그인 상태를 유지합니다.
        getUserDataWithSession();
    }, [getUserDataWithSession]);

    if (errorMsg) return <Error />;

    return <MyRouter />;
}

export default App;
