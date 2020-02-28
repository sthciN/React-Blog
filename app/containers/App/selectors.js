import { createSelector } from 'reselect';
import { initialState } from '../Article/reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectShowNotification = () =>
  createSelector(
    selectGlobal,
    substate => substate.showNotification,
  );

export { makeSelectShowNotification };
