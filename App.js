import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Card from './Card'

const App = () => {
  return (
    <>
      <Heading/>
      <Card/>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
