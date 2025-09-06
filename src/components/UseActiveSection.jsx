import { useState, useEffect } from 'react';

export default function UseActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    // The IntersectionObserver callback function.
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // If a section is intersecting (visible) with the viewport...
        if (entry.isIntersecting) {
          // ...update the activeSection state with its ID.
          setActiveSection(entry.target.id);
        }
      });
    };

    // Observer options: rootMargin helps define the "activation area".
    // This configuration means a section is considered "active" when it's
    // in the middle 40% of the screen.
    const observerOptions = {
      rootMargin: '-30% 0px -70% 0px',
    };

    // Create the observer.
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section.
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function: unobserve all elements when the component unmounts.
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]); // The effect depends on the list of section IDs.

  return activeSection;
}