/*
 *
 * Global reducer
 *
 */
import produce from 'immer';
import { SET_NOTIFICATION_VISIBILITY_ACTION } from './constants';

export const initialState = {
  showNotification: false,
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_NOTIFICATION_VISIBILITY_ACTION:
        draft.showNotification = action.show;
        break;
      default:
        break;
    }
  });

export default globalReducer;
