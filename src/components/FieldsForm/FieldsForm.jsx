import { useRef } from "react";
import "./FieldsForm.css";
import TextField from '@mui/material/TextField';
import React from "react";


export const FieldsForm = (props) => {
  const typedValue = (e) => props.whenType(e.target.value);
  const inputRef = useRef(null);
  return (
    <section>
      <div className="input__container">        
        <TextField 
          id="filled-hidden-label"
          className="input__field"    
          fullWidth
          label={props.name}
          variant="filled"          
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onChange={typedValue}
          size={props.size}
          disabled={props.disabled}
          style={props.style}          
          ref={inputRef}                              
        />
      </div>
    </section>
  );
};
