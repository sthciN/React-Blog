/*
 *
 * Article actions
 *
 */

import { DEFAULT_ACTION, SET_ARTICLES_ACTION, GET_ARTICLES_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getArticlesAction() {
  return {
    type: GET_ARTICLES_ACTION,
  };
}

export function setArticlesAction(articles) {
  return {
    type: SET_ARTICLES_ACTION,
    articles
  };
}
