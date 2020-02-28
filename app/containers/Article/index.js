/**
 *
 * Article
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Col } from 'react-bootstrap';
import { Pagination } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectArticle from './selectors';
import reducer from './reducer';
import saga from './saga';
import { createUseStyles } from 'react-jss';
import ArticleComponent from '../../components/ArticleComponent';
import { sampleArticles } from './config';

const useStyles = createUseStyles(theme => ({
  colContainer: {
    padding: [0, 0, theme.esDistance * 10, 0],
    cursor: 'pointer',
  },
  pagination: {
    margin: 'auto',
  },
}))

export function Article() {
  useInjectReducer({ key: 'article', reducer });
  useInjectSaga({ key: 'article', saga });
  const classes = useStyles();
  const history = useHistory();
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

  const articlesRenderer = articles => (articles.articles.map(article => articleRenderer(article)))
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
      {articlesRenderer(sampleArticles)}
      {/* TODO Dummy Pagination */}
      <Pagination className={classes.pagination} total={500} itemRender={itemRender} />
    </>
  );
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  article: makeSelectArticle(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Article);
