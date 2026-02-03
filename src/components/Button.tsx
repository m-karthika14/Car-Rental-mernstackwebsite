import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-95 transition ${className}`}
    >
      {children}
    </button>
  );
}
