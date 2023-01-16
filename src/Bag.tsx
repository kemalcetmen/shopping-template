import React from 'react';
import Cards from './components/Cards'
import useFilter from './hooks/useFilter'
import Bag from './components/Bag';

function App() {
  const products = useFilter()

  return (
    <>
      <Cards products={products.filter(product => product.inBasket > 0)} />
      <Bag />
    </>
  );
}

export default App;