import MyRouter from "router/router";
import useUserSession from "hook/useUserSession";
import { useEffect } from "react";

function App() {
    const { getUserDataWithSession } = useUserSession();

    useEffect(() => {
        getUserDataWithSession();
    }, [getUserDataWithSession]);

    return <MyRouter />;
}

export default App;
