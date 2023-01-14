import React, {useState} from 'react'

type Props = {}
//make it like [type, products] and use it in cards and clear cards from all state and sliceses 
const useSequence = (props: Props) => {
    const [product, setProduct] = useState()
  return (
    <div>useSequence</div>
  )
}

export default useSequence