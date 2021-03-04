import React from "react";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  Container,
} from "../constants/styles";
import { Link } from "react-router-dom";
import registerUser from "../services/registerUser";

const Register = ({ handleChange, userDetails }) => {
  const { password, confirmPassword } = userDetails;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      console.log("passwords match");

      registerUser(userDetails);
    }
  };
  return (
    <Container>
      <h1>Register</h1>
      <StyledForm action="submit" onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          type="email"
          required
          placeholder="email..."
          name="email"
        />
        <StyledInput
          onChange={handleChange}
          type="password"
          required
          placeholder="password..."
          name="password"
        />
        <StyledInput
          onChange={handleChange}
          type="password"
          required
          placeholder="confirm password..."
          name="confirmPassword"
        />
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
      <Link to="/">Already a member? Login here.</Link>
    </Container>
  );
};

export default Register;
