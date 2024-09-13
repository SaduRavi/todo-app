import React from "react";
import './styles/BlinkingCircle.css';

export default function BlinkingCircle({ color }) {
  return (
    <svg height="50" width="50" className="blinking">
      <circle cx="25" cy="25" r="10" fill={color} />
    </svg>
  );
}
