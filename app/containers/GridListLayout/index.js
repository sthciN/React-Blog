/**
 *
 * GridListLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Pagination } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGridListLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleComponent from '../../components/ArticleComponent';
import { sampleArticles } from './config.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  colContainer: {
    padding: [0, 0, theme.esDistance * 10, 0],
  },
}))

export function GridListLayout({ children }) {
  useInjectReducer({ key: 'gridListLayout', reducer });
  useInjectSaga({ key: 'gridListLayout', saga });
  const classes = useStyles();
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  const articlesRenderer = articles => (articles.articles.map(article => articleRenderer(article)))
  const articleRenderer = article => (<Col xs={6} className={classes.colContainer}><ArticleComponent article={article} /></Col>)
  return (
    <div>
      <Row noGutters>
        <Col />
        <Col xs={8}>
          <Row noGutters>
            {articlesRenderer(sampleArticles)}
          </Row>
        </Col>
        <Col xs={2} >
          {children}
        </Col>
        <Col />
      </Row>
      {/* TODO dummy pagination */}
      <Pagination total={500} itemRender={itemRender} />
    </div>
  );
}

GridListLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gridListLayout: makeSelectGridListLayout(),
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

export default compose(withConnect)(GridListLayout);
