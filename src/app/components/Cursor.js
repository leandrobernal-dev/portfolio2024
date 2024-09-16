"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../css/customCursor.module.css";

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Detect touch device

  const [cursorSize, setCursorSize] = useState(20);
  const cursorRef = useRef(null); // Ref for custom cursor
  const mousePosition = useRef({ x: 0, y: 0 }); // Store mouse position
  const cursorPosition = useRef({ x: 0, y: 0 }); // Store the custom cursor's position

  const lagMultiplier = 0.05; // Adjust the multiplier for more or less lag
  const cursorSizeOffset = cursorSize / 2;

  useEffect(() => {
    // Detect if the user is on a touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Hovering over a button or link
    const handleMouseEnter = () => {
      setCursorSize(50); // Change cursor size when hovering over clickable elements
    };

    // Leaving a button or link
    const handleMouseLeave = () => {
      setCursorSize(20); // Reset cursor size when not hovering over clickable elements
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Attach hover events to all clickable elements (buttons and links)
    const clickableElements = document.querySelectorAll("button, a");
    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const animateCursor = () => {
      const distX =
        mousePosition.current.x - cursorPosition.current.x - cursorSizeOffset;
      const distY =
        mousePosition.current.y - cursorPosition.current.y - cursorSizeOffset;

      // Lerp (linear interpolation) for smooth movement
      cursorPosition.current.x += distX * lagMultiplier;
      cursorPosition.current.y += distY * lagMultiplier;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {!isTouchDevice && (
        <div
          ref={cursorRef}
          className={styles.cursor}
          style={{ width: cursorSize, height: cursorSize }}
        />
      )}
    </>
  );
};

export default CustomCursor;
