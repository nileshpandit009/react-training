import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function FormInput({
  id,
  name,
  type = "text",
  label,
  onChange,
  placeholder,
  required,
  invalid,
  errorMessage,
  children,
}) {
  if (type === "checkbox" || type === "radio") {
    return (
      <FormGroup className="pt-2">
        <Label for={id}>
          <Input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            invalid={invalid}
          />
          {` `}
          {label}
          <FormFeedback>{errorMessage}</FormFeedback>
        </Label>
      </FormGroup>
    );
  }

  return (
    <FormGroup className="pt-2">
      <Label for={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        invalid={invalid}
      >
        {children}
      </Input>
      <FormFeedback>{errorMessage}</FormFeedback>
    </FormGroup>
  );
}

export default FormInput;
