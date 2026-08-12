"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref =
    useRef<HTMLDivElement>(
      null
    );

  const [
    visible,
    setVisible,
  ] =
    useState(false);


  useEffect(() => {
    const element =
      ref.current;

    if (!element) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );


    observer.observe(element);


    return () =>
      observer.disconnect();

  }, []);


  return (
    <div
      ref={ref}
      className={`
        reveal
        ${
          visible
            ? "reveal-visible"
            : ""
        }
        ${className}
      `}
      style={{
        transitionDelay:
          `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}