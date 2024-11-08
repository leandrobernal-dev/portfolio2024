"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../css/customCursor.module.css";

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Detect touch device

  const [outerCursorSize, setOuterCursorSize] = useState(50);
  const [innerCursorSize, setInnerCursorSize] = useState(20); // Smaller size for inner circle

  const outerCursorOffset = outerCursorSize / 2;
  const innerCursorOffset = innerCursorSize / 2;

  const outerCursorRef = useRef(null); // Ref for outer ring cursor
  const innerCursorRef = useRef(null); // Ref for inner solid cursor

  const mousePosition = useRef({ x: 0, y: 0 }); // Store mouse position
  const outerCursorPosition = useRef({ x: 0, y: 0 }); // Outer cursor position
  const innerCursorPosition = useRef({ x: 0, y: 0 }); // Inner cursor position

  const outerLagMultiplier = 0.05; // Lag multiplier for outer ring
  const innerLagMultiplier = 0.1; // Faster lag for inner circle

  useEffect(() => {
    // Detect if the user is on a touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      const distXOuter =
        mousePosition.current.x -
        outerCursorPosition.current.x -
        outerCursorOffset;
      const distYOuter =
        mousePosition.current.y -
        outerCursorPosition.current.y -
        outerCursorOffset;

      const distXInner =
        mousePosition.current.x -
        innerCursorPosition.current.x -
        innerCursorOffset;
      const distYInner =
        mousePosition.current.y -
        innerCursorPosition.current.y -
        innerCursorOffset;

      // Lerp (linear interpolation) for smooth movement with different delays
      outerCursorPosition.current.x += distXOuter * outerLagMultiplier;
      outerCursorPosition.current.y += distYOuter * outerLagMultiplier;
      innerCursorPosition.current.x += distXInner * innerLagMultiplier;
      innerCursorPosition.current.y += distYInner * innerLagMultiplier;

      if (outerCursorRef.current) {
        outerCursorRef.current.style.transform = `translate(${outerCursorPosition.current.x}px, ${outerCursorPosition.current.y}px)`;
      }

      if (innerCursorRef.current) {
        innerCursorRef.current.style.transform = `translate(${innerCursorPosition.current.x}px, ${innerCursorPosition.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [outerCursorOffset, innerCursorOffset]);

  return (
    <>
      {!isTouchDevice && (
        <>
          <div
            ref={outerCursorRef}
            className={styles.outerCursor}
            style={{ width: outerCursorSize, height: outerCursorSize }}
          />
          <div
            ref={innerCursorRef}
            className={styles.innerCursor}
            style={{
              width: innerCursorSize,
              height: innerCursorSize,
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
