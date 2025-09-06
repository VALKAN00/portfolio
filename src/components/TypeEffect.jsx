import React, { useState, useEffect } from "react";

export default function TypeEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    "Data Scientist",
    "Web Developer",
  ];

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];

      // Determine if we are typing or deleting
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      // Logic to switch between typing and deleting
      if (!isDeleting && updatedText === currentWord) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === "") {
        // Move to the next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    // Set the speed of the typing effect
    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(type, typingSpeed);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]); // This effect runs whenever these state variables change

  return (
    // The span with a pulsing border creates the cursor effect
    <span className="border-r-2 border-purple-500 animate-pulse">{text}</span>
  );
}
