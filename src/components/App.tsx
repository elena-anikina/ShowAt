import React from 'react';
import ShowAt from './ShowAt';

const App: React.FC = () => {
  return (
    <ShowAt date={new Date('2022-04-08T19:00:00')}>
      <p>Hello</p>
    </ShowAt>
  );
};

export default App;
