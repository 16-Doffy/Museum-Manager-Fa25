'use client';
import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ label, ...props }) => {
    return (_jsx("button", { ...props, style: { padding: "8px 16px", borderRadius: 6, background: "#007bff", color: "#fff" }, children: label }));
};
