import React from "react";

import RecommendProfile from "components/Library/RecommendProfile";

const Recommend = () => {
    return (
        <div className="library__recommend">
            <span>당신에게 꼭 필요할 것 같은 성공회인</span>
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
            <RecommendProfile />
        </div>
    );
};

export default Recommend;
