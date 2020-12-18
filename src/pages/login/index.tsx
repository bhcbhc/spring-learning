import React, { FC } from 'react';

interface LoginPropsData {}

const Login: FC<LoginPropsData> = props => {
  console.log(props);
  return <div>Login</div>;
};

export default Login;
