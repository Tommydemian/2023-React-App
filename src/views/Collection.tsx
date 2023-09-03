import React from 'react';
import { Counter } from '../components/Counter';

const Collection: React.FC = () => {
  return (
    <div>
      <Counter initialCount={0} />
    </div>
  );
};

export default Collection;