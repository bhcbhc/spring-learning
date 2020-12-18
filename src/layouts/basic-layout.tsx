import { Helmet } from 'react-helmet';
import React from 'react';

const BasicLayout = (props: any) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default BasicLayout;
