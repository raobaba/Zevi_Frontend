import { faker } from '@faker-js/faker';

export const generateFakeClothingData = () => {
    const fakeClothingData = [];
    for (let i = 0; i < 5; i++) {
      const clothingItem = {
        name: faker.commerce.productName(),
        image: faker.image.urlLoremFlickr({ category: 'fashion' }), 
      };
      fakeClothingData.push(clothingItem);
    }
    return fakeClothingData;
  };

  export const generateFakePopularSuggestions = () => {
    const fakeSuggestions = [];
    for (let i = 0; i < 5; i++) {
      const suggestion = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`;
      fakeSuggestions.push(suggestion);
    }
    return fakeSuggestions;
  };

  export const generateFakeFashionItems = (query = '') => {
    const fashionItems = [];
  
    for (let i = 0; i < 40; i++) {
      const fashionItem = {
        image: faker.image.urlLoremFlickr({ category: 'fashion' }),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        discountPrice: faker.commerce.price(),
        ratings: faker.commerce.price({ min: 1, max: 5 }),
        review: faker.commerce.price({ min: 100, max: 10000 }),
      };
  
      if (!query || fashionItem.name.toLowerCase().includes(query.toLowerCase())) {
        fashionItems.push(fashionItem);
      }
    }
  
    return fashionItems;
  };
  