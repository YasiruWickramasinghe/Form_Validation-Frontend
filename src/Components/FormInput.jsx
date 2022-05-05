import { useState } from "react";
import styled from "styled-components";
import "./formInput.css";

const Forminput = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;
// const Input = styled.input`
//   padding: 1vw;
//   margin: 0.8vw 0vw;
//   border-radius: 0.5vw;
//   border: 0.1vw solid grey;

//   ::placeholder {
//     font-size: 1vw;
//   }

//   /* :invalid[focused="true"] {
//     border: 0.1vw solid red;
//   }

//   :invalid[focused="true"] ~ Span {
//     display: block;
//   } */
// `;

const Label = styled.label`
  font-size: 1vw;
  color: gray;
  padding: 0.5vw 0vw;
`;
const Span = styled.span`
  font-size: 1vw;
  padding: 0.1vw;
  color: red;
  display: none;
`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const hadleFocus = (e) => {
    setFocused(true);
  };
  return (
    <Forminput>
      <Label>{label}</Label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={hadleFocus}
        onFocus={() =>
          inputProps.name === "confirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <Span>{errorMessage}</Span>
    </Forminput>
  );
};

export default FormInput;
