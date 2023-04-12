import { useCallback, useRef } from 'react';

const useIntersectionObserver = <T extends HTMLElement>({
  callback,
  root,
}: {
  callback: () => void;
  root?: HTMLDivElement | null;
}) => {
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useCallback(
    (node: T) => {
      if (intersectionObserverRef.current) intersectionObserverRef.current.disconnect();
      intersectionObserverRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            callback();
          }
        },
        {
          root,
          rootMargin: '200px 0px',
        },
      );
      if (node) intersectionObserverRef.current.observe(node);
    },
    [callback],
  );

  return targetRef;
};

export default useIntersectionObserver;
