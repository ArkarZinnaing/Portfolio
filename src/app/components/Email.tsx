"use client";
import React, { useState } from "react";
import { ButtonEmail } from './Button';
import '../tooltip.css'; 

function CopyButton() {
  const [tooltip, setTooltip] = useState("Copy Email!");

  const handleCopy = () => {
    navigator.clipboard.writeText("sawpyaesone23@gmail.com");
    setTooltip("Copied!");
    setTimeout(() => setTooltip("Copy Email!"), 1500);
  };

  return (
    <div className="relative inline-block">
        <ButtonEmail label="Email Address"
        onClick={handleCopy}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        data-tooltips={tooltip}
        />
    </div>
  );
}

export default CopyButton;
