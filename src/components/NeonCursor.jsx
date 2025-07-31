import React, { useEffect } from 'react';

const NeonCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'neon-cursor';
    document.body.appendChild(cursor);
    const move = e => {
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(cursor);
    };
  }, []);
  return null;
};

export default NeonCursor;
