import { useRef } from "react";
import { useRecoilValue } from "recoil";

import useMainPosts from "hook/useMainPosts";
import Loading from "components/Loading/Loading";
import useInfinityScroll from "hook/useInfinityScroll";
import NewsfeedContent from "components/Home/NewsfeedContent";
import { hasMorePostsState, mainPostsState } from "store/posts";

const Newsfeed = () => {
    // infinity scroll을 위해 감지될 요소의 ref
    const observeTarget = useRef<HTMLDivElement>(null);
    // 현재 렌더링중인 posts에 대한 global state
    const posts = useRecoilValue(mainPostsState);
    // 서버에 추가적인 post가 있는지에 대한 global state
    const hasMorePosts = useRecoilValue(hasMorePostsState);

    // 로딩 상태와 감지됐을 때 할 행동을 custom hook에서 받아옵니다.
    const { isLoading, onIntersect } = useMainPosts();

    // 포스트의 컨텐츠를 줄바꿈 기준 3줄까지 포매팅합니다.
    const setContentFormat = (ogContent: string) => {
        const fmContent = ogContent.split("\n").slice(0, 3).join("\n");
        return fmContent;
    };

    // custom hook을 이용하여 infinity scroll을 구현합니다.
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
