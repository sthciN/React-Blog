/**
 *
 * SingleArticle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import truncate from 'lodash/truncate';
import classnames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSingleArticle from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../Header';
import GridListLayout from '../GridListLayout';
import { createUseStyles } from 'react-jss';
import { sampleArticle } from './config';
import { FormattedDate } from 'react-intl';
import dummyImage400 from '../../assets/images/dummyImage400.jpg';
import dummyImage180 from '../../assets/images/dummyImage180.jpg';

const useStyles = createUseStyles(theme => ({
  container: {
    margin: [0, theme.esDistance * 10, 0, theme.esDistance * 4],
  },
  articleContainer: {
    textAlign: 'left',
    marginBottom: theme.esDistance * 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.esDistance * 3,
  },
  detail: {
    marginBottom: theme.esDistance * 8,
    fontSize: 14,
    color: theme.textMute,
  },
  body: {
    marginTop: theme.esDistance * 8,
  },
  description: {
    borderLeft: [10, 'solid', theme.primaryColor],
    paddingLeft: theme.esDistance * 3,
    margin: [theme.esDistance * 3, 0, 0, theme.esDistance * 20],
  },
  socialsAndTags: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.textWhite,
  },
  social: {
    width: 36,
    height: 36,
    marginRight: theme.esDistance,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  facebook: {
    backgroundColor: '#4464b1',
  },
  twitter: {
    backgroundColor: '#57acef',
  },
  linkedin: {
    backgroundColor: '#007bb6',
  },
  vimeo: {
    backgroundColor: '#62a0ad',
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
  },
  tagTitle: {
    marginRight: theme.esDistance * 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tag: {
    marginRight: theme.esDistance * 2,
    padding: [0, theme.esDistance],
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    border: [2, 'solid', 'rgba(230,230,230, 0.8)'],
    borderRadius: 4,
  },
  author: {
    margin: [theme.esDistance * 18, 0],
    display: 'flex',
  },
  authorImage: {
    borderRadius: 5,
  },
  authorDetail: {
    marginLeft: theme.esDistance * 8,
    padding: [theme.esDistance * 2, 0],
  },
  authorName: {
    marginBottom: theme.esDistance,
    fontWeight: 'bold',
  },
  authorJob: {
    marginBottom: theme.esDistance * 4,
    color: theme.textMute,
  },
}))

export function SingleArticle() {
  useInjectReducer({ key: 'singleArticle', reducer });
  useInjectSaga({ key: 'singleArticle', saga });
  const classes = useStyles();
  const { slug, title, description, body, createdAt, author, tagList } = sampleArticle;
  const articleRenderer = () => {
    return (
      <div className={classes.articleContainer}>
        <h4 className={classes.title}>{truncate(title, { length: '50' })}</h4>
        <div className={classes.detail}>{messages.by}: {author.username}, {messages.date}: <FormattedDate value={new Date(createdAt)} year="numeric" month="long" day="2-digit" /></div>
        <img src={dummyImage400} alt="Photo" width={610} />
        <div className={classes.body}>{body}</div>
        <div className={classes.description}>{description}</div>
      </div>
    )
  }
  const socialsRenderer = () => (
    <div className={classes.socials}>
      <div className={classnames([classes.social, classes.facebook])}>
        <span aria-hidden="true" className="icon-facebook"></span>
      </div>
      <div className={classnames([classes.social, classes.twitter])}>
        <span aria-hidden="true" className="icon-twitter"></span>
      </div>
      <div className={classnames([classes.social, classes.linkedin])}>
        <span aria-hidden="true" className="icon-linkedin"></span>
      </div>
      <div className={classnames([classes.social, classes.vimeo])}>
        <span aria-hidden="true" className="icon-vimeo"></span>
      </div>
    </div>
  )
  const tagsRenderer = () => (tagList.map(tag => (<div key={tag} className={classes.tag}>{tag}</div>)))
  const authorRenderer = () => (
    <div className={classes.author}>
      <span>
        <img className={classes.authorImage} src={author.image} alt="Photo" width={180} />
      </span>
      <div className={classes.authorDetail}>
        <div className={classes.authorName}>{author.username}</div>
        <div className={classes.authorJob}>{messages.authorJob}</div>
        <div className={classes.authorBio}>{messages.authorBio}</div>
      </div>
    </div>
  )
  return (
    <div>
      <Helmet>
        <title>SingleArticle</title>
        <meta name="description" content="Description of SingleArticle" />
      </Helmet>
      <Header title={messages.title} />
      <GridListLayout>
        <div className={classes.container}>
          {articleRenderer()}
          <div className={classes.socialsAndTags}>
            {socialsRenderer()}
            <div className={classes.tags}>
              <div className={classes.tagTitle}>{messages.tags}</div>
              {tagsRenderer()}
            </div>
          </div>
          {authorRenderer()}
        </div>
      </GridListLayout>
    </div>
  );
}

SingleArticle.propTypes = {
  article: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  singleArticle: makeSelectSingleArticle(),
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

export default compose(withConnect)(SingleArticle);
