'use client';

import { PropsWithChildren, useLayoutEffect, useRef } from 'react';

import { useProfileIntersection } from '@/hook/home/layout/useProfileIntersection';

export function AvatarIntersectionObserver({ children }: PropsWithChildren) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { setProfileIntersection } = useProfileIntersection();

  useLayoutEffect(() => {
    const createScrollObserver = () => {
      let observer = new IntersectionObserver(
        ([{ intersectionRatio }]) => setProfileIntersection(intersectionRatio),
        {
          rootMargin: '-10px 0px 0px 0px',
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        },
      );

      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      createScrollObserver();
    } else {
      window.addEventListener('load', createScrollObserver);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', createScrollObserver);
    }
  }, [imageRef, setProfileIntersection]);

  return <div ref={imageRef}>{children}</div>;
}
