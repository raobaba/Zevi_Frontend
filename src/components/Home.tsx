import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import TrendingProducts from "./TrendingProducts";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import "../styles/Home.scss";
import { generateFakeFashionItems } from "../utils/FakeDataGenerator";
function Home() {
  const [clicked, setClicked] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);
  const [selectedRating, setSelectedRating] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleInputChange = () => {
    setUserTyping(true);
  };

  const handleSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (
        inputRef.current &&
        inputRef.current instanceof HTMLElement &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setClicked(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const searchResults = generateFakeFashionItems(searchQuery);

  const sortSearchResults = (
    results: {
      image: string;
      name: string;
      price: string;
      discountPrice: string;
      ratings: string;
      review: string;
    }[]
  ) => {
    const sortedResults = [...results];
    sortedResults.sort((a, b) => {
      if (sortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return sortedResults;
  };

  const filterByPriceRange = (results: any[]) => {
    return results.filter(
      (item) => item.discountPrice >= minPrice && item.discountPrice <= maxPrice
    );
  };

  const filterByRatings = (results: any[]) => {
    if (selectedRating === 0) {
      return results;
    } else {
      return results.filter(
        (item: { ratings: number }) => item.ratings >= selectedRating
      );
    }
  };

  const filteredResults = filterByRatings(
    filterByPriceRange(sortSearchResults(searchResults))
  );

  return (
    <div className="home-container">
      <div className="search-container">
        <Search
          handleInputClick={handleInputClick}
          inputRef={inputRef}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />
      </div>
      <div className="trending-container">
        {!userTyping && <TrendingProducts clicked={clicked} />}
      </div>
      <div className={userTyping ? "filter-list" : ""}>
        {userTyping ? (
          <div className="list-filter">
            <ProductFilter
              onSortChange={(ascending) => setSortAscending(ascending)}
              onPriceFilterChange={(min, max) => {
                setMinPrice(min);
                setMaxPrice(max);
              }}
              onRatingFilterChange={(rating) => setSelectedRating(rating)}
            />
            <ProductList searchResults={filteredResults} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
