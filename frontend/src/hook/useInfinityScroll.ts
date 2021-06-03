import { useEffect } from "react";

interface PropTypes {
    root?: null;
    rootMargin?: string;
    threshold?: number;
    target: HTMLDivElement | null;
    onIntersect: IntersectionObserverCallback;
}

const useInfinityScroll = ({
    root,
    rootMargin = "0px",
    threshold = 1,
    target,
    onIntersect,
}: PropTypes) => {
    useEffect(() => {
        if (!target) return;
        
        const observer: IntersectionObserver = new IntersectionObserver(
            onIntersect,
            { root, rootMargin, threshold }
        );

        observer.observe(target);
        return () => observer.unobserve(target);
    }, [root, rootMargin, threshold, target, onIntersect]);
};

export default useInfinityScroll;
