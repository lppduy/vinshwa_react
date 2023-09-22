import React from 'react';

const Hello = () => {
  // return <div>Hello Duy~</div>;
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummy' },
    React.createElement('h1', null, 'Hello Phuong Duy'),
  );
};

export default Hello;
