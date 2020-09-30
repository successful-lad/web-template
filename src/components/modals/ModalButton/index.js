import React from "react";

const Button = ({ children, buttonStyle, disabled = false, ...props }) =>{
  return(
    <button
      {...props}
      style={buttonStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
