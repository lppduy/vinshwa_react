import React from 'react';

const Greet = props => {
  return (
    <>
      <h1>
        Hello {props.name} - {props.heroName}
      </h1>
      {props.children}
    </>
  );
};

export default Greet;
