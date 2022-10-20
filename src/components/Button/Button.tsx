import React from "react";
import "./Button.styles.scss";

const Button = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
