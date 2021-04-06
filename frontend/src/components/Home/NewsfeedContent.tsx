import React from "react";
import sample from "static/images/profile.png";


const NewsfeedContent = () => {
    return (
        <div className="newsfeed__content">
            <div className="newsfeed__content__writer">
                <div className="newsfeed__content__writer__img">
                    <img src={sample} alt="writer profile img" />
                </div>
                <div className="newsfeed__content__writer__info">
                    <span>Hyesung Oh</span>
                    <span className="newsfeed__content__writer__info--major">
                        소프트웨어공학과
                    </span>
                </div>
            </div>
            <div className="newsfeed__content__body">
                <span>
                    {" "}
                    더미 데이터 입니다. 더미 데이터 입니다. 더미 데이터 입니다.
                    더미 데이터 입니다. 더미 데이터 입니다. 더미 데이터 입니다.
                    더미 데이터 입니다.{" "}
                </span>
            </div>
        </div>
    );
};

export default NewsfeedContent;
