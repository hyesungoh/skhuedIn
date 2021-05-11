import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavContainer from "pages/nav/container/NavContainer";
import HomeContainer from "pages/home/container/HomeContainer";
import InterviewPresenter from "pages/interview/presenter/InterviewPresenter";
import IntroducePresenter from "pages/introduce/presenter/IntroducePresenter";
import LibraryContainer from "pages/library/container/LibraryContainer";
import BookContainer from "pages/book/container/BookContainer";
import SignInContainer from "pages/signIn/container/SignInContainer";
import SignInNaverContainer from "pages/signinNaver/containter/SignInNaverContainer";
import SignInSettingContainer from "pages/signinSetting/container/SignInSettingContainer";
import SignUpPresenter from "pages/signUp/presenter/SignUpPresenter";
import MypagePresenter from "pages/mypage/presenter/MypagePresenter";
import WritingPresenter from "pages/writing/presenter/WritingPresenter";
import PostContainer from "pages/post/container/PostContainer";

import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup className="page">
        <CSSTransition key={location.key} classNames="slide" timeout={1200}>
            <Switch location={location}>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/introduce" component={IntroducePresenter} />
                <Route path="/library" exact component={LibraryContainer} />
                <Route path="/library/:id" component={BookContainer} />
                <Route path="/interview" component={InterviewPresenter} />
                <Route path="/signin" exact component={SignInContainer} />
                <Route path="/signin/naver" component={SignInNaverContainer} />
                <Route
                    path="/signin/setting"
                    component={SignInSettingContainer}
                />
                <Route path="/signup" component={SignUpPresenter} />
                <Route path="/mypage/:id" component={MypagePresenter} />
                <Route path="/write" component={WritingPresenter} />
                <Route path="/post/:id" component={PostContainer} />
                <Route path="/loading" component={Loading} />
                <Route path="/error" component={Error} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

const MyRouter = () => {
    return (
        <BrowserRouter>
            <NavContainer />
            <TransitionRouter />
        </BrowserRouter>
    );
};

export default MyRouter;
