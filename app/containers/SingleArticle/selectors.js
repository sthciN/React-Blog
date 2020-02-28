import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the singleArticle state domain
 */

const selectSingleArticleDomain = state => state.singleArticle || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SingleArticle
 */

const makeSelectSingleArticle = () =>
  createSelector(
    selectSingleArticleDomain,
    substate => substate,
  );

const makeSelectArticle = () =>
  createSelector(
    selectSingleArticleDomain,
    substate => substate.article,
  );

export default makeSelectSingleArticle;
export { selectSingleArticleDomain, makeSelectArticle };
