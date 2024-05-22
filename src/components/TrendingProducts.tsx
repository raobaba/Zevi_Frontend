import React from 'react';
import '../styles/TrendingProducts.scss';
import { generateFakeClothingData ,generateFakePopularSuggestions} from '../utils/FakeDataGenerator';
interface TrendingProductsProps {
  clicked: boolean;
}

function TrendingProducts({ clicked }: TrendingProductsProps) {
  let clothingData: {
    image: string | undefined;
    name: string;
  }[] = [];
  let suggestionData: string[] = [];

  if (clicked) {
    clothingData = generateFakeClothingData();
    suggestionData = generateFakePopularSuggestions();
  }

  return (
    <div className={`trending-products ${clicked ? 'background-white' : ''}`}>
      {clicked && (<h2 className="trending-heading">Latest Trends</h2>)}
      <div className="product-list">
        {clothingData.map((item, index) => (
          <div className="product-item" key={index}>
            <img src={item.image} alt="No Name" className='trending-image' />
            <p className="product-name">{item.name}</p>
          </div>
        ))}
      </div>
      {clicked && (<h3 className='popular-suggestion'>Popular Suggestions</h3>)}
      <div className='suggestion'>
        <ul>
          {suggestionData.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrendingProducts;