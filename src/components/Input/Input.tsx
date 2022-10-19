import React from "react";
import "./Input.styles.scss";

const Input = ({
  altText,
  classNameArray,
  onChange,
}: {
  altText?: string;
  classNameArray?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}) => <input alt={altText} className={classNameArray} onChange={onChange} />;

export default Input;
