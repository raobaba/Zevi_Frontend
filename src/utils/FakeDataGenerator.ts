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
  