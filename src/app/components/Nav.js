"use client";

import { useEffect, useState } from "react";

const navSections = ["About", "Projects", "Experience"];

export default function Nav() {
  const [activeSection, setActiveSection] = useState(navSections[0]);

  useEffect(() => {
    // Select all sections using querySelectorAll
    const sections = document.querySelectorAll(".section");

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section
          }
        });
      },
      { threshold: 0.6 }, // Trigger when 50% of the section is visible
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navSections.map((item, index) => (
          <li key={item + index}>
            <a className="group flex items-center py-3" href={`#${item}`}>
              <span
                className={`${activeSection === item ? "text-zinc-200" : "text-zinc-600"} mr-4 group-hover:text-zinc-200`}
              >
                0{index + 1}
              </span>
              <span
                className={`${activeSection === item ? "w-16 bg-zinc-200" : "w-8 bg-zinc-600"} mr-4 h-px transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none`}
              ></span>
              <span
                className={`${activeSection === item ? "text-zinc-200" : "text-zinc-600"} nav-text text-xs font-bold uppercase tracking-widest group-hover:text-zinc-200 group-focus-visible:text-zinc-200`}
              >
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
