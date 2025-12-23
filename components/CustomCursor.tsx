import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        cursorDotRef.current.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-[100] mix-blend-difference top-0 left-0 transition-transform duration-75 ease-out hidden md:block" />
      <div ref={cursorDotRef} className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference top-0 left-0 hidden md:block" />
    </>
  );
};

export default CustomCursor;
