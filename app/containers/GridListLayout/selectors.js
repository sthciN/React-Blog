import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gridListLayout state domain
 */

const selectGridListLayoutDomain = state =>
  state.gridListLayout || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GridListLayout
 */

const makeSelectGridListLayout = () =>
  createSelector(
    selectGridListLayoutDomain,
    substate => substate,
  );

export default makeSelectGridListLayout;
export { selectGridListLayoutDomain };
