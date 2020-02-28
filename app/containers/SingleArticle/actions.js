/*
 *
 * SingleArticle actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { GET_ARTICLE_ACTION, SET_ARTICLE_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getArticleAction(slug) {
  return {
    type: GET_ARTICLE_ACTION,
    slug,
  };
}

export function setArticleAction(article) {
  return {
    type: SET_ARTICLE_ACTION,
    article,
  };
}