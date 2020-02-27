import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the category state domain
 */

const selectCategoryDomain = state => state.category || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Category
 */

const makeSelectCategory = () =>
  createSelector(
    selectCategoryDomain,
    substate => substate,
  );

export default makeSelectCategory;
export { selectCategoryDomain };
