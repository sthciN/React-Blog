import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/requests';
import { GET_ARTICLES_ACTION } from './constants';
import { BASE_URL } from '../../utils/constants';
import { setArticlesAction } from './actions';
import { setNotificationVisibilityAction } from '../App/actions';

function* getArticles() {
  const url = `${BASE_URL}/articles`;
  try {
    const response = yield call(request, url);
    yield put(setArticlesAction(response));
  } catch (err) {
    yield put(setNotificationVisibilityAction(true));
  }
}

// Individual exports for testing
export default function* articleSaga() {
  yield takeLatest(GET_ARTICLES_ACTION, getArticles);
}
