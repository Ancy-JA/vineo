import { useRef, useEffect } from 'react';

interface UseInfiniteScrollProps {
  isFetching: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  rootMargin?: string; // Optional margin to trigger loading earlier or later
}

const useInfiniteScroll = ({ isFetching, hasMore, onLoadMore, rootMargin = '200px' }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = (node: HTMLDivElement | null) => {
    // If currently fetching or there's no more data, do nothing
    if (isFetching || !hasMore) return;

    // Disconnect previous observer before creating a new one
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        // Check if entries[0] exists and is intersecting
        if (entries[0] && entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { rootMargin } // Allows customization of the margin
    );

    // Observe the node if it exists
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    return () => observer.current?.disconnect(); // Cleanup observer on component unmount
  }, []);

  return lastElementRef;
};

export default useInfiniteScroll;
