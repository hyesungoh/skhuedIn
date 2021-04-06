import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePresenter from "pages/home/presenter/HomePresenter";

import Nav from "components/nav/Nav";
import InterviewPresenter from "pages/interview/presenter/InterviewPresenter";
import IntroducePresenter from "pages/introduce/presenter/IntroducePresenter";
import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import BookPresenter from "pages/book/presenter/BookPresenter";
import SignInPresenter from "pages/SignIn/presenter/SignInPresenter";
import SignUpPresenter from "pages/SignUp/presenter/SignUpPresenter";
import MypagePresenter from "pages/mypage/presenter/MypagePresenter";
import WritingPresenter from "pages/Writing/presenter/WritingPresenter";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup className="page">
        <CSSTransition key={location.key} classNames="slide" timeout={1200}>
            <Switch location={location}>
                <Route path="/" exact component={HomePresenter} />
                <Route path="/introduce" component={IntroducePresenter} />
                <Route path="/library" exact component={LibraryPresenter} />
                <Route path="/library/:id" component={BookPresenter} />
                <Route path="/interview" component={InterviewPresenter} />
                <Route path="/signin" component={SignInPresenter} />
                <Route path="/signup" component={SignUpPresenter} />
                <Route path="/mypage/:id" component={MypagePresenter} />
                <Route path="/write" component={WritingPresenter} />
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
