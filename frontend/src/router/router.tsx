import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePresenter from "pages/home/presenter/HomePresenter";

import Nav from "components/nav/Nav";
import InterviewPresenter from "pages/interview/presenter/InterviewPresenter";
import IntroducePresenter from "pages/introduce/presenter/IntroducePresenter";
import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import SignInPresenter from "pages/SignIn/presenter/SignInPresenter";
import SignUpPresenter from "pages/SignUp/presenter/SignUpPresenter";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup className="page">
        <CSSTransition key={location.key} classNames="slide" timeout={1200}>
            <Switch location={location}>
                <Route path="/" exact component={HomePresenter} />
                <Route path="/introduce" component={IntroducePresenter} />
                <Route path="/library" component={LibraryPresenter} />
                <Route path="/interview" component={InterviewPresenter} />
                <Route path="/signin" component={SignInPresenter} />
                <Route path="/signup" component={SignUpPresenter} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            <TransitionRouter />
        </BrowserRouter>
    );
};

export default MyRouter;
