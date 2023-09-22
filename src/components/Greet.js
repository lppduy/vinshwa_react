import React from 'react';

const Greet = props => {
  const { name, heroName } = props;
  return (
    <>
      <h1>
        Hello {name} - {heroName}
      </h1>
      {/* {props.children} */}
    </>
  );
};

export default Greet;
