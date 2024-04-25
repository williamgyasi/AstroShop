import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const Login = () => {
    const catData=  useLoaderData()
    const navigation= useNavigation()

  return <div>{catData.id}</div>;
};

export default Login;
