import React, {useState} from 'react'
import Explore from './Components/Explore/Explore';
import Product from './Components/Product/Product';

const App = () => {
  const [category, setCategory] = useState("All");


  return (
    <div>
      <Explore category={category} setCategory={setCategory}/>
      <Product category={category}/>
    </div>
  )
}

export default App