import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePresenter from "pages/home/presenter/HomePresenter";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="asd" timeout={1000}>
            <Switch location={location}>
                <Route path="/" exact component={HomePresenter} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

const MyRouter = () => {
    return (
        <BrowserRouter>
            <TransitionRouter />
        </BrowserRouter>
    );
};

export default MyRouter;
