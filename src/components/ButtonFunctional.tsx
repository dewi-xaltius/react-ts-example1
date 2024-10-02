import React from 'react';

interface ButtonProps {
  label: string;
  color?: string;
}

const ButtonFunctional: React.FC<ButtonProps> = ({ label, color = 'blue' }) => {
  return (
    <button style={{ backgroundColor: color }}>
      {label}
    </button>
  );
};

export default ButtonFunctional;
