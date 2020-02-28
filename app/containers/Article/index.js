/**
 *
 * Article
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import messages from './messages';
import { Col } from 'react-bootstrap';
import { Pagination } from 'antd';
import slice from 'lodash/slice';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectArticles } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { createUseStyles } from 'react-jss';
import ArticleComponent from '../../components/ArticleComponent';
import { getArticlesAction } from './actions';
import NotificationComponent from '../../components/NotificationComponent';
import { makeSelectShowNotification } from '../App/selectors';
import { setNotificationVisibilityAction } from '../App/actions';

const useStyles = createUseStyles(theme => ({
  colContainer: {
    padding: [0, 0, theme.esDistance * 10, 0],
    cursor: 'pointer',
  },
  pagination: {
    margin: 'auto',
  },
}))

const pageSize = 6;

export function Article({ getArticles, showNotification, handleCloseNotification, articles }) {
  useInjectReducer({ key: 'article', reducer });
  useInjectSaga({ key: 'article', saga });
  const [currentPage, setCurrentPage] = useState(1);
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getArticles();
  }, [history.location.pathname])
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  const handleClickArticle = () => {
    history.push('/article');
  }
  const handlePageChange = page => {
    setCurrentPage(page);
  }
  const articlesRenderer = articles => (
    slice(articles.articles, currentPage * pageSize - pageSize, Math.min(currentPage * pageSize, articles.articlesCount))
      .map(article => articleRenderer(article))
  )
  const articleRenderer = article => (
    <Col
      onClick={handleClickArticle}
      key={article.slug}
      xs={6}
      className={classes.colContainer}
    >
      <ArticleComponent article={article} />
    </Col>
  )
  return (
    <>
      {articles && articlesRenderer(articles)}
      <Pagination
        className={classes.pagination}
        pageSize={pageSize}
        total={!articles ? 0 : articles.articlesCount}
        itemRender={itemRender}
        onChange={handlePageChange}
      />
      <NotificationComponent
        onClose={handleCloseNotification}
        show={showNotification}
        title={messages.errNotificationTitle}
        content={messages.errNotificationContent}
      />
    </>
  );
}

Article.propTypes = {
  getArticles: PropTypes.func,
  showNotification: PropTypes.bool,
  handleCloseNotification: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
  showNotification: makeSelectShowNotification(),
});

function mapDispatchToProps(dispatch) {
  return {
    getArticles: () => dispatch(getArticlesAction()),
    handleCloseNotification: () => dispatch(setNotificationVisibilityAction(false)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Article);
