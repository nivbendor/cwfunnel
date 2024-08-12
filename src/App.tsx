import React from 'react';
import BenefitCalculator from './components/BenefitCalculator';
import config from './config/default';

const App: React.FC = () => {
  return (
    <div className="App">
      <BenefitCalculator config={config} />
    </div>
  );
};

export default App;