import React, { useState } from "react";
import "../styles/ProductFilter.scss";
import { FaStar } from "react-icons/fa";

type ProductFilterProps = {
  onSortChange: (ascending: boolean) => void;
  onPriceFilterChange: (minPrice: number, maxPrice: number) => void;
  onRatingFilterChange: (rating: number) => void;
};

const ProductFilter: React.FC<ProductFilterProps> = ({
  onSortChange,
  onPriceFilterChange,
  onRatingFilterChange,
}) => {
  const [ascending, setAscending] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSortChange = () => {
    onSortChange(ascending);
    setAscending(!ascending);
  };

  const handlePriceFilterChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    onPriceFilterChange(min, max);
  };

  const handleRatingFilterChange = (rating: number) => {
    setSelectedRating(rating);
    onRatingFilterChange(rating);
  };

  return (
    <div className="product-filter">
      <h2>Sorting and Filter</h2>
      <details>
        <summary>NAME</summary>
        <label>
          <input
            type="checkbox"
            checked={ascending}
            onChange={handleSortChange}
          />{" "}
          A to Z
        </label>
        <label>
          <input
            type="checkbox"
            checked={!ascending}
            onChange={handleSortChange}
          />{" "}
          Z to A
        </label>
      </details>
      <br />
      <details>
        <summary>PRICE RANGE</summary>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            checked={minPrice === 0 && maxPrice === 500}
            onChange={() => handlePriceFilterChange(0, 500)}
          />
          Below 500
        </label>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            checked={minPrice === 500 && maxPrice === 3000}
            onChange={() => handlePriceFilterChange(500, 3000)}
          />
          500 - 3000
        </label>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            checked={minPrice === 3000}
            onChange={() =>
              handlePriceFilterChange(3000, Number.MAX_SAFE_INTEGER)
            }
          />
          Above 3000
        </label>
      </details>
      <br />
      <details>
        <summary>RATINGS</summary>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating}>
            <input
              type="checkbox"
              name="rating"
              value={rating}
              checked={selectedRating === rating}
              onChange={() => handleRatingFilterChange(rating)}
            />
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
          </label>
        ))}
      </details>
    </div>
  );
};

export default ProductFilter;