import React from "react";

const Dashboard = ({ userAccount }) => {
  return (
    <>
      <h1>Welcome {userAccount.data.email}</h1>
      <h6>You logged in!</h6>
    </>
  );
};

export default Dashboard;
