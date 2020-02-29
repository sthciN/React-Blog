/*
 *
 * AddComment actions
 *
 */

import { DEFAULT_ACTION, SUBMIT_COMMENT_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitCommentAction(slug, name, email, body) {
  return {
    type: SUBMIT_COMMENT_ACTION,
    slug,
    name,
    email,
    body,
  };
}
