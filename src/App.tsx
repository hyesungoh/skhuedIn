import MyRouter from "router/router";
import useUserSession from "hook/useUserSession";
import { useEffect } from "react";

function App() {
    const { getUserDataWithSession } = useUserSession();

    useEffect(() => {
        // 리랜더링 시, session의 값을 확인해서 로그인 상태를 유지합니다.
        getUserDataWithSession();
    }, [getUserDataWithSession]);

    return <MyRouter />;
}

export default App;
