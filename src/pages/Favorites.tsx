import React from 'react';
import Cards from '../components/Cards'
import useFilter from '../hooks/useFilter'

function App() {
  const products = useFilter()

  return (
      <Cards products={products.filter(product =>product.isLiked)}/>
  );
}

export default App;