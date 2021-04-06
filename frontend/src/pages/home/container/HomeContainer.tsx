import React, { Component } from "react";
import HomePresenter from "../presenter/HomePresenter";

class HomeContainer extends Component {
    state = {
        loading: false,
        posts: [{}],
    };
    componentDidMount() {}

    render() {
        return <HomePresenter />;
    }
}
