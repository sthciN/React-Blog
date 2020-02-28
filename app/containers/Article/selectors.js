import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the article state domain
 */

const selectArticleDomain = state => state.article || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Article
 */

const makeSelectArticle = () =>
  createSelector(
    selectArticleDomain,
    substate => substate,
  );

export default makeSelectArticle;
export { selectArticleDomain };
