import { useEffect, Fragment } from "react";
import { RouteChildrenProps, withRouter } from "react-router-dom";


// router 변경될 시 스크롤 위치를 최상으로
const ScrollToTop = ({ location }: RouteChildrenProps) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);
    
    return <Fragment />;
};

export default withRouter(ScrollToTop);
