import React from "react";
import "./Input.styles.scss";

const Input = ({
  altText,
  classNameArray,
  onChange,
}: {
  altText?: string;
  classNameArray?: string;
  onChange?: (event: { target: HTMLInputElement }) => void;
}) => <input alt={altText} className={classNameArray} onChange={onChange} />;

export default Input;
