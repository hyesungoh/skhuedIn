import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IUser } from "types";
import { baseUrl } from "api/url";
import BookProfileInfoSummary from "./BookProfileInfoSummary";
import useInterview from "hook/interview/useInterview";
import useFollow from "hook/follow/useFollow";

interface IBookProfile {
    user: IUser;
    blogImage: string;
}

const BookProfile = ({ user, blogImage }: IBookProfile) => {
    const { alertNotYet, toggleFollowUser } = useFollow();
    const { requestInterview } = useInterview();

    return (
        <div className="book__profile__info">
            <div className="book__profile__info__vertical">
                <div className="book__profile__info__vertical__image">
                    <img
                        src={`${baseUrl}/profile/${blogImage}`}
                        // src={blogImage}
                        alt="book profile img"
                    />
                </div>
                <div className="book__profile__info__vertical__follow">
                    <div
                        className="book__profile__info__vertical__follow__heart"
                        onClick={()=>{toggleFollowUser(user.id)}}
                    >
                        <FontAwesomeIcon icon={faHeart} size="1x" />
                    </div>

                    <button onClick={requestInterview}>인터뷰 요청하기</button>
                </div>
            </div>

            <BookProfileInfoSummary
                name={user.name}
                email={user.email}
                entranceYear={user.entranceYear}
                graduationYear={user.graduationYear}
            />
        </div>
    );
};

export default BookProfile;
