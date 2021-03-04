import axios from "axios";

const login = (user, setUserAccount, setRedirect) => {
  axios
    .post("http://127.0.0.1:5000/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      setUserAccount(res);
      setRedirect(true);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default login;
