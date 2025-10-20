import React from 'react';

interface ButtonProps {
  icon?: React.ReactNode;
  styles?: React.CSSProperties;
  title: string;
  reverse?: boolean;
  onClickFunc?: (v?: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  styles,
  reverse = false,
  onClickFunc,
}) => {
  return reverse ? (
    <button
      onClick={() => (onClickFunc ? onClickFunc() : {})}
      type="button"
      className="button-component-reverse"
      style={styles}
    >
      {icon && icon}
      <p>{title}</p>
    </button>
  ) : (
    <button
      onClick={() => (onClickFunc ? onClickFunc() : {})}
      type="button"
      className="button-component"
      style={styles}
    >
      {icon && icon}
      <p>{title}</p>
    </button>
  );
};

export default Button;
