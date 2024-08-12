import React from 'react';

interface LogoSpinnerProps {
  size?: number;
  color?: string;
}

const LogoSpinner: React.FC<LogoSpinnerProps> = ({ size = 50, color = '#2d5ff1' }) => {
  return (
    <svg
      className="logo-spinner"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeDasharray="31.4 31.4"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default LogoSpinner;