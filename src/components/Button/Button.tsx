import React from "react";
import "./Button.styles.scss";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <button className={className}>{children}</button>;

export default Button;
