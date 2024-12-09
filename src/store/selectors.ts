import { State } from './state-type';

export const selectOffersByCity = (state: State) =>
  state.offers.filter((offer) => offer.city.name === state.city.name);
