import React from "react";
import { useRecoilValue } from "recoil";

import BookProfile from "components/Book/BookProfile";
import { currentUserState } from "store/user";
import Loading from "components/Loading/Loading";

const MypagePresenter = () => {
    const currentUser = useRecoilValue(currentUserState);

    if (!currentUser.data) return <Loading />;

    return (
        <div className="book">
            <BookProfile
                user={currentUser.data}
                blogImage={currentUser.data.userImageUrl}
            />
        </div>
    );
};

export default MypagePresenter;
