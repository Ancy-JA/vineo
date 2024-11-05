// InfiniteScrollLoader.tsx
import React from 'react';

interface InfiniteScrollLoaderProps {
  isFetching: boolean;
  hasMore: boolean;
  loadMore: () => void;
  lastElementRef: (node: HTMLDivElement | null) => void;
}

const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> = ({ isFetching, hasMore, lastElementRef }) => (
  <div ref={lastElementRef} className="my-4">
    {isFetching && <p>Loading...</p>}
    {!hasMore && <p>No more items to load</p>}
  </div>
);

export default InfiniteScrollLoader;
