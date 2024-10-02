import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import InputField from './components/InputField';
import ButtonClass from './components/ButtonClass';
import ButtonFunctional from './components/ButtonFunctional';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>React with TypeScript Examples</h1>
      
      <section>
        <h2>Greeting Component</h2>
        <Greeting name="John Doe" age={30} />
      </section>
      
      <section>
        <h2>Counter Component</h2>
        <Counter initialCount={5} />
      </section>
      
      <section>
        <h2>InputField Component</h2>
        <InputField />
      </section>
      
      <section>
        <h2>Button Class Component</h2>
        <ButtonClass label="Click Me" />
      </section>

      <section>
        <h2>Button Functional Component</h2>
        <ButtonFunctional label="Click Me" />
      </section>
    </div>
  );
};

export default App;
