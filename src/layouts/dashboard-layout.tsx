import React from 'react';

export default (props: any) => {
  console.log(props);
  return <div>{props.children}</div>;
};
