import React from "react";

const Person = props => {
  return (
    <p>
      My name is {props.name} and I'm {props.age} years old.
    </p>
  );
};

export default Person;
