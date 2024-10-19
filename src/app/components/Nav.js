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
                className={`${activeSection === item ? "text-accent" : "text-zinc-600"} group-hover:text-accent mr-4`}
              >
                0{index + 1}
              </span>
              <span
                className={`${activeSection === item ? "bg-accent w-16" : "w-8 bg-zinc-600"} group-hover:bg-accent group-focus-visible:bg-accent mr-4 h-px transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none`}
              ></span>
              <span
                className={`${activeSection === item ? "text-accent" : "text-zinc-600"} nav-text group-hover:text-accent group-focus-visible:text-accent text-xs font-bold uppercase tracking-widest`}
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
