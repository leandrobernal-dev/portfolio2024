"use client";

import { useEffect, useRef } from "react";
import styles from "../css/customCursor.module.css";

const CursorEffect = () => {
    const cursorRef = useRef(null); // Ref for custom cursor
    const mousePosition = useRef({ x: 0, y: 0 }); // Store mouse position
    const cursorPosition = useRef({ x: 0, y: 0 }); // Store the custom cursor's position

    const lagMultiplier = 0.03; // Adjust the multiplier for more or less lag
    const cursorSize = 30; // Adjust the size of the cursor
    const cursorSizeOffset = cursorSize / 2;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animateCursor = () => {
            const distX =
                mousePosition.current.x -
                cursorPosition.current.x -
                cursorSizeOffset;
            const distY =
                mousePosition.current.y -
                cursorPosition.current.y -
                cursorSizeOffset;

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
        <div
            className={styles.cursor}
            style={{ width: `${cursorSize}px`, height: `${cursorSize}px` }}
            ref={cursorRef}
        />
    );
};

export default CursorEffect;
