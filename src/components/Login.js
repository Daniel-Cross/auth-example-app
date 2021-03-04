import React from "react";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  Container,
} from "../constants/styles";
import { Link, useHistory } from "react-router-dom";
import login from "../services/login";

const Login = ({
  handleChange,
  setUserAccount,
  userAccount,
  userDetails,
  setRedirect,
  redirect,
}) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(userDetails, setUserAccount, setRedirect);

    if (redirect === true) {
      history.push("/dashboard");
    }
  };

  return (
    <Container>
      <h1>Login</h1>
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
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
      <Link to="/register">Not a member? Register here.</Link>
    </Container>
  );
};

export default Login;
