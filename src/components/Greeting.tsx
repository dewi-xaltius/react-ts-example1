import React from 'react';

interface GreetingProps {
  name: string;
  age?: number;  // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      {age && <p>Your age is {age}</p>}
    </div>
  );
};

export default Greeting;
