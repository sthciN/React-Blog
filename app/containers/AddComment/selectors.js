import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addComment state domain
 */

const selectAddCommentDomain = state => state.addComment || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddComment
 */

const makeSelectAddComment = () =>
  createSelector(
    selectAddCommentDomain,
    substate => substate,
  );

export default makeSelectAddComment;
export { selectAddCommentDomain };
