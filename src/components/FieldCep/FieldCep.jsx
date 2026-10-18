import "./FieldCep.css";
import TextField from "@mui/material/TextField";
import React from "react";

export const FieldCep = (props) => {
  const onblur = (e) => props.onblur(e.target.value);
  const typedValue = (e) => props.whenType(e.target.value);

  // <div className="input__container">        
  //       <TextField 
  //         id="filled-hidden-label"
  //         className="input__field"    
  //         fullWidth
  //         label={props.name}
  //         variant="filled"          
  //         type={props.type}
  //         placeholder={props.placeholder}
  //         required={props.required}
  //         value={props.value}
  //         onChange={typedValue}
  //         size={props.size}
  //         disabled={props.disabled}
  //         style={props.style}          
  //         ref={inputRef}                              
  //       />
  //     </div>

  return (
    <section>
      <div className="input__container">        
        <TextField          
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          value={props.value}
          onBlur={onblur}
          onChange={typedValue}
          size={props.size}
          style={props.style}
          className="input__field"
          label={props.name}
          variant="filled"
        />
      </div>
    </section>
  );
};
