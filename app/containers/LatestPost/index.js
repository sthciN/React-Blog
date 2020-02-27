/**
 *
 * LatestPost
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import truncate from 'lodash/truncate';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLatestPost from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import dummyImage from '../../assets/images/dummyImage72.jpg';
import { createUseStyles } from 'react-jss';
import { sampleArticles } from './config';

const useStyles = createUseStyles(theme => ({
  container: {
    marginRight: -(theme.esDistance * 10),
    textAlign: 'left',
  },
  contentContainer: {
    margin: [theme.esDistance * 6, 0],
    display: 'flex',
    flexDirection: 'row',
  },
  summeries: {
    marginLeft: theme.esDistance,
  },
  date: {
    marginTop: theme.esDistance,
    color: theme.textMute,
    fontSize: 12,
  },
}))

const truncateLength = 50;

export function LatestPost({ articles }) {
  useInjectReducer({ key: 'latestPost', reducer });
  useInjectSaga({ key: 'latestPost', saga });
  const classes = useStyles();
  const articlesRenderer = articles => (articles.articles.map(article => articleRenderer(article)))
  const articleRenderer = article => {
    const { title, createdAt } = article;
    return (
      <div className={classes.contentContainer}>
        <img src={dummyImage} width={72} />
        <div className={classes.summeries}>
          <div>{truncate(title, { length: truncateLength })}</div>
          <div className={classes.date}>
            {messages.post} <FormattedDate value={new Date(createdAt)} day="2-digit" year="numeric" month="short" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={classes.container}>
      <h5>{messages.title}</h5>
      {articlesRenderer(sampleArticles)}
    </div>
  );
}

LatestPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  articles: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  latestPost: makeSelectLatestPost(),
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

export default compose(withConnect)(LatestPost);
