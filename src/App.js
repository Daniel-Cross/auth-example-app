import { useState } from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userAccount, setUserAccount] = useState();
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  console.log({ userDetails });
  console.log({ userAccount });

  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Login
              handleChange={handleChange}
              userDetails={userDetails}
              setUserAccount={setUserAccount}
              userAccount={userAccount}
              setRedirect={setRedirect}
              redirect={redirect}
            />
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <Register handleChange={handleChange} userDetails={userDetails} />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={() =>
            redirect && userAccount ? (
              <Dashboard userAccount={userAccount} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Router>
    </>
  );
}

export default App;
