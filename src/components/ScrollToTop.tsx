import { useEffect, Fragment } from "react";
import { RouteChildrenProps, withRouter } from "react-router-dom";

const ScrollToTop = ({ location }: RouteChildrenProps) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);
    
    return <Fragment />;
};

export default withRouter(ScrollToTop);
