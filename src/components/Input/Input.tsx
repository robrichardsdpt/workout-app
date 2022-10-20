import React from "react";
import "./Input.styles.scss";

const Input = ({
  tabIndex,
  required = false,
  inputName,
  altText,
  classNameArray,
  onChange,
}: {
  tabIndex?: number;
  required?: boolean;
  inputName?: string;
  altText?: string;
  classNameArray?: string;
  onChange?: (event: { target: HTMLInputElement }) => void;
}) => (
  <input
    tabIndex={tabIndex}
    required={required}
    name={inputName}
    alt={altText}
    className={classNameArray}
    onChange={onChange}
  />
);

export default Input;
