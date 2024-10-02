import React, { useState } from 'react';

const InputField: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Input: {text}</p>
    </div>
  );
};

export default InputField;
