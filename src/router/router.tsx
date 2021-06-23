import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavContainer from "pages/nav/container/NavContainer";
import HomeContainer from "pages/home/container/HomeContainer";
import SuggestionContainer from "pages/suggestion/container/SuggestionContainer";
import IntroducePresenter from "pages/introduce/presenter/IntroducePresenter";
import LibraryContainer from "pages/library/container/LibraryContainer";
import BookContainer from "pages/book/container/BookContainer";
import SignInContainer from "pages/signIn/container/SignInContainer";
import SignInNaverContainer from "pages/signinNaver/containter/SignInNaverContainer";
import SignInSettingContainer from "pages/signinSetting/container/SignInSettingContainer";
import SignUpPresenter from "pages/signUp/presenter/SignUpPresenter";
import MypageContainer from "pages/mypage/container/MypageContainer";
import WritingPresenter from "pages/writing/presenter/WritingPresenter";
import PostContainer from "pages/post/container/PostContainer";
import Notfound from "pages/notfound/Notfound";

import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import RegistBlogContainer from "pages/registBlog/container/RegistBlogContainer";
import ScrollToTop from "components/ScrollToTop";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup className="page">
        <CSSTransition key={location.key} classNames="slide" timeout={1200}>
            <Switch location={location}>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/introduce" component={IntroducePresenter} />
                <Route path="/library" exact component={LibraryContainer} />
                <Route path="/library/:id" exact component={BookContainer} />
                <Route path="/suggestion" component={SuggestionContainer} />
                <Route path="/signin" exact component={SignInContainer} />
                <Route path="/signin/naver" component={SignInNaverContainer} />
                <Route
                    path="/signin/setting"
                    component={SignInSettingContainer}
                />
                <Route path="/signup" component={SignUpPresenter} />
                <Route path="/mypage/:id" component={MypageContainer} />
                <Route path="/write" component={WritingPresenter} />
                <Route path="/post/:id" component={PostContainer} />
                <Route path="/loading" component={Loading} />
                <Route path="/error" component={Error} />
                <Route path="/regist" component={RegistBlogContainer} />
                <Route component={Notfound} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

const MyRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <NavContainer />
            <TransitionRouter />
        </BrowserRouter>
    );
};

export default MyRouter;
