
import { Link } from "react-router-dom";

import BookProfilePostDetail from "./BookProfilePostDetail";
import { IPost } from "api/index";

interface IBookProfilePosts {
    posts: IPost[];
}

const BookProfilePosts = ({ posts }: IBookProfilePosts) => {
    // const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

    return (
        <div className="book__profile__question">
            <Link to="/write">
                <div className="book__profile__question__write">
                    <span>새로운 글 작성하기</span>
                </div>
            </Link>

            {posts.map((post, index) => {
                const { id, title, content, createdDate, view } = post;
                return (
                    <BookProfilePostDetail
                        key={index}
                        id={id}
                        index={index}
                        title={title}
                        content={content}
                        createdDate={createdDate}
                        view={view}
                    />
                );
            })}

            {/* <ModalPortal>
                {openModalIndex !== null ? (
                    <PostModal
                        setOpenModalIndex={setOpenModalIndex}
                        title={posts[openModalIndex].title}
                        content={posts[openModalIndex].content}
                        created={posts[openModalIndex].created}
                        view={posts[openModalIndex].view}
                    />
                ) : null}
            </ModalPortal> */}
        </div>
    );
};

export default BookProfilePosts;
