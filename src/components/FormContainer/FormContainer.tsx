import React from "react";

const FormContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default FormContainer;
