import React from "react";

const HonorProfile = () => {
    return (
        <div className="honorProfile">
            <div className="honorProfile__img">
                <img src="/images/profile.png" alt="honorProfile img" />
            </div>
            <div className="honorProfile__container">
                <div className="honorProfile__container__ame">
                    <span>오혜성</span>
                </div>
                <div className="honorProfile__container__info">
                    소프트웨어 공학과 / 17학번 / 어쩌구 재직중
                </div>
            </div>
            <div className="honorProfile__btn">
                <span>자세히 보기</span>
            </div>
        </div>
    );
};

export default HonorProfile;
