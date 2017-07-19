import {
  USER,
  DIMENSIONS,
  VIEW,
  FILTERS,
  CART,
} from '../constants/actionTypes';

export const getUser = () => ({
  type: USER.fetch,
});

export const getDimensions = data => ({
  type: DIMENSIONS.fetch,
  payload: data,
});

export const getSetDimensions = data => ({
  type: DIMENSIONS.fetchSet,
  payload: data,
});

export const getWheelsDimensions = () => ({
  type: DIMENSIONS.fetchWheels,
});

export const toggleView = data => ({
  type: VIEW.toggle,
  payload: data,
});

export const addFromUrl = data => ({
  type: FILTERS.fromUrl,
  payload: data,
});

export const addToCart = data => ({
  type: CART.add,
  payload: data,
});

export const removeFromCart = data => ({
  type: CART.remove,
  payload: data,
});
