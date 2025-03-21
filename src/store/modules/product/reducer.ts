import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import { Reducer, AnyAction } from 'redux';

import { ActionTypes, IProductProps, IProductState } from './types';

const INITIAL_STATE: IProductState = {
  product: {} as IProductProps,
  reviews: [],
  shipping_options: [],
} as IProductState;

const product: Reducer<IProductState> = (
  state = INITIAL_STATE,
  action: AnyAction,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case HYDRATE: {
        return { ...draft, ...action.payload.product };
      }

      case ActionTypes.updateProductData: {
        // eslint-disable-next-line no-shadow
        const { product } = action.payload;

        return { ...draft, product, reviews: [] };
      }
      case ActionTypes.updateProductReviews: {
        const { reviews: newsReviews, productId } = action.payload;

        if (productId === draft.product.id) {
          return { ...draft, reviews: [...draft.reviews, ...newsReviews] };
        }

        return { ...draft, reviews: newsReviews };
      }
      case ActionTypes.updateProductFreightCalculation: {
        const { options } = action.payload;

        return { ...draft, shipping_options: options };
      }
      default: {
        return draft;
      }
    }
  });
};

export default product;
