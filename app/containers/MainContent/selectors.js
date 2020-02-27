import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainContent state domain
 */

const selectMainContentDomain = state => state.mainContent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainContent
 */

const makeSelectMainContent = () =>
  createSelector(
    selectMainContentDomain,
    substate => substate,
  );

export default makeSelectMainContent;
export { selectMainContentDomain };
