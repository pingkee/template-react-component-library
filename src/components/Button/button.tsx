import React from "react";

export interface ButtonProps {
  label: string;
}

interface props {
    ButtonProps: ButtonProps
}

const Button = (props: props) => {
  return <button>{props.ButtonProps.label}</button>;
};
const group = (props: props) => {
  return <button>{props.ButtonProps.label}</button>;
};

export default Button;