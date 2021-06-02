import React, { useState, useEffect, useCallback, useRef } from "react";
import HomePresenter from "../presenter/HomePresenter";

import { RouteComponentProps } from "react-router";

import "pages/home/Home.scss";

const HomeContainer = ({ history }: RouteComponentProps) => {
    const loader = useRef<HTMLDivElement | null>(null);

    const handleObserver = useCallback((entries) => {
        console.log(entries);
    }, []);
    
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };

        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    })
    // return <HomePresenter loading={loading} posts={posts} />;
    return <div>
        
        <div ref={loader}></div>
    </div>;
};

export default HomeContainer;
