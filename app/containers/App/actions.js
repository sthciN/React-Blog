import { SET_NOTIFICATION_VISIBILITY_ACTION } from "./constants";


export function setNotificationVisibilityAction(show) {
  return {
    type: SET_NOTIFICATION_VISIBILITY_ACTION,
    show,
  };
}



