import React, { useState } from "react";
import "../styles/ProductList.scss";
import { FaStar, FaHeart } from "react-icons/fa";

interface Product {
  image: string;
  name: string;
  price: number;
  discountPrice: number;
  ratings: number;
  review: number;
}

interface ProductListProps {
  searchResults: Product[];
}

function generateStarIcons(rating: number) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} />);
  }
  return stars;
}

const ProductList: React.FC<ProductListProps> = ({ searchResults }) => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (index: number) => {
    if (likedItems.includes(index)) {
      setLikedItems(likedItems.filter((item) => item !== index));
    } else {
      setLikedItems([...likedItems, index]);
    }
  };

  return (
    <div className="product-list-box">
      <h2>Search Results</h2>
      <div className="product-box">
        {searchResults.map((item, index) => (
          <div key={index} className="product-item">
            <div className="like-icon" onClick={() => toggleLike(index)}>
              <FaHeart color={likedItems.includes(index) ? "red" : "gray"} />
            </div>
            <img src={item.image} alt={item.name} />
            <div className="view-product-button">View Product</div>
            <p>{item.name}</p>
            <span>
              <p style={{ textDecoration: "line-through" }}>
                Rs. {item.price.toFixed(0)}
              </p>
              <p style={{ marginLeft: "10px" }}>
                Rs. {item.discountPrice.toFixed(0)}
              </p>
            </span>
            <span>
              <p style={{ display: "flex" }}>
                <span style={{ color: "red" }}>
                  {generateStarIcons(item.ratings)}
                </span>
                <span style={{ marginTop: "8px" }}>
                  ({item.review.toFixed(0)})
                </span>
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;