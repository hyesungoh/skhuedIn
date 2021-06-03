import { useEffect } from "react";

interface PropTypes {
    root?: null;
    rootMargin?: string;
    threshold?: number;
    target: Element | null;
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
        const observer: IntersectionObserver = new IntersectionObserver(
            onIntersect,
            { root, rootMargin, threshold }
        );

        if (!target) return;

        observer.observe(target);
        return () => observer.unobserve(target);
    }, [root, rootMargin, threshold, target, onIntersect]);
};

export default useInfinityScroll;
