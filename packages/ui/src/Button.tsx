'use client';

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button: React.FC<Props> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      style={{ padding: "8px 16px", borderRadius: 6, background: "#007bff", color: "#fff" }}
    >
      {label}
    </button>
  );
};
