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
  