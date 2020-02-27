import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newsletter state domain
 */

const selectNewsletterDomain = state => state.newsletter || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Newsletter
 */

const makeSelectNewsletter = () =>
  createSelector(
    selectNewsletterDomain,
    substate => substate,
  );

export default makeSelectNewsletter;
export { selectNewsletterDomain };
