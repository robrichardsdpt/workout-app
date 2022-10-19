import React from "react";
import "./Input.styles.scss";

const Input = ({
  altText,
  classNameArray,
  onChange,
}: {
  altText?: string;
  classNameArray?: string;
  onChange?: () => void;
}) => <input alt={altText} className={classNameArray} />;

export default Input;
