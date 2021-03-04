import axios from "axios";

const registerUser = (user) => {
  axios
    .post("http://127.0.0.1:5000", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default registerUser;
