import React from "react";
import "./Input.styles.scss";

const Input = ({
  required = false,
  inputName,
  altText,
  classNameArray,
  onChange,
}: {
  required?: boolean;
  inputName?: string;
  altText?: string;
  classNameArray?: string;
  onChange?: (event: { target: HTMLInputElement }) => void;
}) => (
  <input
    required={required}
    name={inputName}
    alt={altText}
    className={classNameArray}
    onChange={onChange}
  />
);

export default Input;
