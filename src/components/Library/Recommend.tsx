import React from "react";

import RecommendProfile from "components/Library/RecommendProfile";

const Recommend = () => {
    return (
        <div className="library__recommend">
            <p className="library__recommend__title">당신에게 꼭 필요할 것 같은 성공회인</p>
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
        </div>
    );
};

export default Recommend;
