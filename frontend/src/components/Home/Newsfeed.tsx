import NewsfeedContent from "components/Home/NewsfeedContent";
import { useRecoilValue } from "recoil";
import { mainPostsState } from "store/posts";
import useMainPosts from "hook/useMainPosts";
import Loading from "components/Loading/Loading";
import useInfinityScroll from "hook/useInfinityScroll";

const Newsfeed = () => {
    const posts = useRecoilValue(mainPostsState);

    const { isLoading, onIntersect } = useMainPosts();

    const setContentFormat = (ogContent: string) => {
        const fmContent = ogContent.split("\n").slice(0, 3).join("\n");
        return fmContent;
    };

    // useInfinityScroll(target);

    if (isLoading) return <Loading />;

    return (
        <div className="home__newsfeed">
            {posts.map((post, index) => (
                <NewsfeedContent
                    key={index}
                    id={post.id}
                    title={post.title}
                    content={setContentFormat(post.content)}
                    createdDate={post.createdDate}
                    view={post.view}
                />
            ))}
        </div>
    );
};

export default Newsfeed;
