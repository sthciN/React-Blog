/*
 *
 * Article reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_ARTICLES_ACTION } from './constants';

export const initialState = {
  articles: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const articleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_ARTICLES_ACTION:
        draft.articles = action.articles;
        break;
      default:
    }
  });

export default articleReducer;
