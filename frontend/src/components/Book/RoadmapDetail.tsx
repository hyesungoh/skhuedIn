import PeopleProfile from "components/Library/PeopleProfile";
import React from "react";

const RoadmapDetail = () => {
    return (
        <div className="book__roadmap__detail">
            <div className="book__roadmap__detail__month">
                <p>2019</p>
                <p>April</p>
            </div>
            <div className="book__roadmap__detail__icon">
                <div className="book__roadmap__detail__icon__circle"></div>
                <div className="book__roadmap__detail__icon__line"></div>
            </div>
            <div className="book__roadmap__detail__summary">
                <p className="book__roadmap__detail__summary__title">
                    어쩌구 저쩌구
                </p>
                <p className="book__roadmap__detail__summary__content">
                    어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
                    어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
                    어쩌구 저쩌구 어쩌구 저쩌구
                </p>
            </div>
        </div>
    );
};

export default RoadmapDetail;
