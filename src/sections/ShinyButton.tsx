import React from "react";
import "./ShinyButton.css"; // Import CSS for the effect

interface ShinyButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button className={`shiny-button ${className}`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default ShinyButton;
