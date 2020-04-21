import React from "react";

const Form = props => {
  return (
    <>
      <form onSubmit={props.submitForm}>
        <h3>Welcome to Prestige Worldwide!</h3>
        
        <label htmlFor="firstName"> &nbsp;First Name:&nbsp; </label>
        <input
          value={props.formData.firstName}
          onChange={props.onInputChange}
          id="firstName"
          name="firstName"
          type="text"
        />
        
        <label htmlFor="lastName">&nbsp;Last Name:&nbsp; </label>
        <input
          value={props.formData.lastName}
          onChange={props.onInputChange}
          id="lastName"
          name="lastName"
          type="text"
        />

        <label htmlFor="emailInput">&nbsp;Email:&nbsp; </label>
        <input
          value={props.formData.email}
          onChange={props.onInputChange}
          id="emailInput"
          name="email"
          type="text"
        />
        
        <label htmlFor="roleInput">&nbsp;Role:&nbsp; </label>
        <input
          value={props.formData.role}
          onChange={props.onInputChange}
          id="roleInput"
          name="role"
          type="text"
        />
        <button>&nbsp;Add&nbsp;</button>
      </form>
    </>
  );
};

export default Form;