import React from 'react';
import Cards from '../components/Cards'
import DropDown from '../components/DropDown'
import useFilter from '../hooks/useFilter'

function App() {
  const products = useFilter()

  return (
    <>
      <DropDown/>
      <Cards products={products} />
    </>
  );
}

export default App;
