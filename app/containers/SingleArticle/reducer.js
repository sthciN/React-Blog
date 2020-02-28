/*
 *
 * SingleArticle reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_ARTICLE_ACTION } from './constants';

export const initialState = {
  article: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const singleArticleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_ARTICLE_ACTION:
        draft.article = action.article;
        break;
        break;
    }
  });

export default singleArticleReducer;
