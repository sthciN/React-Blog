import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the latestPost state domain
 */

const selectLatestPostDomain = state => state.latestPost || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LatestPost
 */

const makeSelectLatestPost = () =>
  createSelector(
    selectLatestPostDomain,
    substate => substate,
  );

export default makeSelectLatestPost;
export { selectLatestPostDomain };
