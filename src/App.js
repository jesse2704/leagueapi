import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header'
import ProductList from './components/ProductList';
import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const apiKey = "RGAPI-c1e7f231-ee33-4d7b-bd1f-abb290f05557";


  useEffect(() => {
    fetch('https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations')
      .then(res => res.json())
      .then(json => {
        setLoaded(true)
        setItems(json)
      });
  }, [])



  if (!loaded) {
    return <div> Loading.....</div>;
  }

  else {
    const category = items.find(category => category.id === expanded)

    return (
      <div className="App">
        <Header />
        <div className='category_container'>
          <ul className='category_ul'>
            {items.map(category => (
              <li
                className='category_li'
                key={category.id}
                onClick={() => setExpanded(category.id)}>
                {category.name}
              </li>
            ))}
          </ul>
          <div className="productlist">
            {category && <ProductList products={category.products} />}
          </div>
        </div>
      </div>
    );
  }

}


export default App;
