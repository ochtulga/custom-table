import mockPromotions from './mockPromotions.json';
import mockProducts from './mockProducts.json';

import { Types } from '../constants/enums/containerTypes';

export const getData = type => {
  switch (type) {
    case Types.promotions:
      return mockPromotions;
    case Types.products:
      return mockProducts;
    default:
      return null;
  }
};
