import React, { useState, useEffect } from "react";

const words = [
  "Full Stack Developer",
  "React • Next.js • Node.js • Express.js • MongoDB • SQL | AI & Machine Learning",
];

export default function TypeEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

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
    <>
      {wordIndex === 0 && (
        <span className="text-gray-300 whitespace-nowrap">I'm a</span>
      )}
      <span className="text-purple-400 font-bold whitespace-nowrap text-center border-r-2 border-purple-500 animate-pulse">
        {text}
      </span>
    </>
  );
}
