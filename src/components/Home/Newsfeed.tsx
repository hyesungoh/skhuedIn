import { useRef } from "react";
import { useRecoilValue } from "recoil";

import useMainPosts from "hook/useMainPosts";
import Loading from "components/Loading/Loading";
import useInfinityScroll from "hook/useInfinityScroll";
import NewsfeedContent from "components/Home/NewsfeedContent";
import { hasMorePostsState, mainPostsState } from "store/posts";

const Newsfeed = () => {
    const observeTarget = useRef<HTMLDivElement>(null);
    const posts = useRecoilValue(mainPostsState);
    const hasMorePosts = useRecoilValue(hasMorePostsState);

    const { isLoading, onIntersect } = useMainPosts();

    const setContentFormat = (ogContent: string) => {
        const fmContent = ogContent.split("\n").slice(0, 3).join("\n");
        return fmContent;
    };

    useInfinityScroll({
        target: observeTarget.current,
        onIntersect: ([{ isIntersecting }]) => {
            if (isIntersecting && hasMorePosts) onIntersect();
        },
        rootMargin: "20px",
    });

    if (isLoading) return <Loading width="50%" />;

    return (
        <div className="home__newsfeed">
            {posts.map((post, index) => (
                <NewsfeedContent
                    key={index}
                    id={post.id}
                    blogId={post.blogId}
                    title={post.title}
                    content={setContentFormat(post.content)}
                    view={post.view}
                    createdDate={post.createdDate}
                    lastModifiedDate={post.lastModifiedDate}
                    user={post.user}
                />
            ))}
            <div ref={observeTarget} />
        </div>
    );
};

export default Newsfeed;
