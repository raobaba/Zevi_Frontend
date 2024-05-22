import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import TrendingProducts from "./TrendingProducts";
import "../styles/Home.scss";
import { generateFakeFashionItems } from "../utils/FakeDataGenerator";
const Home: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleInputChange = () => {
    setUserTyping(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setUserTyping(false);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setClicked(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const searchResults = generateFakeFashionItems(searchQuery);

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
      <div className="trending-container">
        {!userTyping && <TrendingProducts clicked={clicked} />}
      </div>
      </div>
      <div className={userTyping ? 'filter-list' : ''}>
        {userTyping ? (
          <div className="list-filter">
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
