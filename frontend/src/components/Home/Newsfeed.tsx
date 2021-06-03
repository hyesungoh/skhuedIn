import NewsfeedContent from "components/Home/NewsfeedContent";
import { useRecoilValue } from "recoil";
import { mainPostsState } from "store/posts";

const Newsfeed = () => {
    const posts = useRecoilValue(mainPostsState);

    const setContentFormat = (ogContent: string) => {
        const fmContent = ogContent.split("\n").slice(0, 3).join("\n");
        return fmContent;
    };

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
