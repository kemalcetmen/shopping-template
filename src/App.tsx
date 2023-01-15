import React, {useEffect, useState} from 'react';
import Cards from './components/Cards'

import useSequence from './hooks/useSequence'
import useFilter from './hooks/useFilter'

function App() {
  const sequencedProducts = useSequence({sequenceType:"price",reverse:true})
  const filteredProducts= useFilter(sequencedProducts)

  return (
      <Cards products={filteredProducts}/>
  );
}

export default App;
