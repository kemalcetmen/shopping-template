import React from 'react';
import Cards from './components/Cards'

import useSequence from './hooks/useSequence'
import useFilter from './hooks/useFilter'
import Bag from './components/Bag';

function App() {
  const sequencedProducts = useSequence({ sequenceType: "price", reverse: true })
  const filteredProducts = useFilter(sequencedProducts)

  return (
    <>
      <Cards products={filteredProducts.filter(product => product.inBasket > 0)} />
      <Bag />
    </>
  );
}

export default App;