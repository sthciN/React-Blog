import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/requests';
import { GET_ARTICLE_ACTION } from './constants';
import { setArticleAction } from './actions';
import { setNotificationVisibilityAction } from '../App/actions';
import { BASE_URL } from '../../utils/constants';

function* getArticle(action) {
  const { slug } = action;
  const url = `${BASE_URL}/articles/${slug}`;
  try {
    const response = yield call(request, url);
    yield put(setArticleAction(response.article));
  } catch (err) {
    yield put(setNotificationVisibilityAction(true));
  }
}

// Individual exports for testing
export default function* singleArticleSaga() {
  yield takeLatest(GET_ARTICLE_ACTION, getArticle);
}
