import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/requests';
import { SUBMIT_COMMENT_ACTION } from './constants';
import { BASE_URL, TOKEN } from '../../utils/constants';
import { setNotificationVisibilityAction } from '../App/actions';

function* setComment(action) {
  const url = `${BASE_URL}/articles/${action.slug}/comments`;
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // TODO Token comes from registration, no registration is available.
      Authorization: `Token ${TOKEN}`,
  },
    json: {
      comment: {
        body: 'Thank you so much!'
      }
    }
  }
  try {
    yield call(request, url, option);
  } catch (err) {
    yield put(setNotificationVisibilityAction(true));
  }
}

// Individual exports for testing
export default function* addCommentSaga() {
  yield takeLatest(SUBMIT_COMMENT_ACTION, setComment);
}
