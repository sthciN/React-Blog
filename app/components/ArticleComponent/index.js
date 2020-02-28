/**
 *
 * ArticleComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedDate } from 'react-intl';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import truncate from 'lodash/truncate';
import dummyImage from '../../assets/images/dummyImage.jpg';

const useStyles = createUseStyles(theme => ({
  container: {
    height: 420,
    width: 280,
    textAlign: 'left',
    boxShadow: [0, 4, 8, 0, 'rgba(0, 0, 0, 0.1),', 0, 6, 10, 0, 'rgba(0, 0, 0, 0.19)'],
    borderRadius: 6,
    overflow: 'hidden',
  },
  content: {
    padding: [theme.esDistance * 6, theme.esDistance * 4],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 12,
    color: theme.textMute,
    paddingTop: theme.esDistance * 2,
  },
  body: {
    padding: [theme.esDistance * 2, 0],
  },
}))
const truncateNumber = 100;
function ArticleComponent({ article }) {
  const classes = useStyles();
  const { title, author, createdAt, body } = article;
  return (
    <div className={classes.container}>
      <img src={dummyImage} width={280} />
      <div className={classes.content}>
        <div className={classes.title}>
          {truncate(title)}
        </div>
        <div className={classes.detail}>
          {messages.by}: {author.username}, {messages.date}: <FormattedDate value={new Date(createdAt)} year="numeric" month="long" day="2-digit" />
        </div>
        <div className={classes.body}>
          {truncate(body, { 'length': truncateNumber })}
        </div>
      </div>
    </div>
  );
}

ArticleComponent.propTypes = {
  article: PropTypes.object,
};

export default ArticleComponent;
