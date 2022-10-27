import React from "react";
import "./FormContainer.styles.scss";

const FormContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="formContainer">
    <h2 className="formContainer-title">{title}</h2>
    {children}
  </div>
);

export default FormContainer;
