import React from 'react';

const Gate = props => {
  const { children } = props;

  return (
    <div>
      <div>test</div>
      {children}
    </div>
  );
};

export default Gate;
