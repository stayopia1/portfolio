import React from 'react';

interface ButtonProps {
  icon?: React.ReactNode;
  styles?: React.CSSProperties;
  title: string;
  reverse?: boolean;
}

const Button: React.FC<ButtonProps> = ({ icon, title, styles, reverse = false }) => {
  return reverse ? (
    <button type="button" className="button-component-reverse" style={styles}>
      {icon && icon}
      <p>{title}</p>
    </button>
  ) : (
    <button type="button" className="button-component" style={styles}>
      {icon && icon}
      <p>{title}</p>
    </button>
  );
};

export default Button;
