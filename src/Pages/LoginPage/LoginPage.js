import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const Login = () => {
  const catData = useLoaderData();
  // const navigation= useNavigation()

  return <div>Welcome to the LOgin page </div>;
};

export default Login;
