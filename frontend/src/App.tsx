import React, { useEffect } from "react";
import MyRouter from "router/router";

function App() {
    useEffect(()=> {
        const userToken = window.sessionStorage.getItem("userToken");
        console.log(userToken);

    }, [])
    return <MyRouter />;
}

export default App;
