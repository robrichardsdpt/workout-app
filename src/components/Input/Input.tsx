import React from "react";
import "./Input.styles.scss";

const Input = ({
  inputName,
  altText,
  classNameArray,
  onChange,
}: {
  inputName?: string;
  altText?: string;
  classNameArray?: string;
  onChange?: (event: { target: HTMLInputElement }) => void;
}) => (
  <input
    name={inputName}
    alt={altText}
    className={classNameArray}
    onChange={onChange}
  />
);

export default Input;
