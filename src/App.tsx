import React, { useEffect, useState } from 'react';
import Cards from './components/Cards'
import DropDown from './components/DropDown'
import useSequence from './hooks/useSequence'
import useFilter from './hooks/useFilter'

function App() {
  const [typer, setTyper] = useState({ sequenceType: "price", reverse: true })

  const sequencedProducts = useSequence(typer)
  const filteredProducts = useFilter(sequencedProducts)

  return (
    <>
      <DropDown setTyper={setTyper}/>
      <Cards products={filteredProducts} />
    </>
  );
}

export default App;
