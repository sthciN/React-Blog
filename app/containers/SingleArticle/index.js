/**
 *
 * SingleArticle
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import truncate from 'lodash/truncate';
import classnames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../Header';
import GridListLayout from '../GridListLayout';
import Newsletter from '../Newsletter';
import { createUseStyles } from 'react-jss';
import { FormattedDate } from 'react-intl';
import dummyImage400 from '../../assets/images/dummyImage400.jpg';
import AddComment from '../AddComment';
import { getArticleAction } from './actions';
import { makeSelectArticle } from './selectors';
import { setNotificationVisibilityAction } from '../App/actions';
import NotificationComponent from '../../components/NotificationComponent';
import { makeSelectShowNotification } from '../App/selectors';

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

export function SingleArticle({ getArticle, article, handleCloseNotification, showNotification }) {
  useInjectReducer({ key: 'singleArticle', reducer });
  useInjectSaga({ key: 'singleArticle', saga });
  const params = useParams();
  const classes = useStyles();
  useEffect(() => {
    getArticle(params.slug);
  }, [params]);
  const articleRenderer = () => {
    return (
      <div className={classes.articleContainer}>
        <h4 className={classes.title}>{truncate(article.title, { length: '50' })}</h4>
        {/* TODO intl hooks */}
        <div className={classes.detail}>{messages.by}: {article.author.username}, {messages.date}: <FormattedDate value={new Date(article.createdAt)} year="numeric" month="long" day="2-digit" /></div>
        <img src={dummyImage400} alt="Photo" width={610} />
        <div className={classes.body}>{article.body}</div>
        <div className={classes.description}>{article.description}</div>
      </div>
    )
  }

  const handleOnClickSocial = e => {
    e.preventDefault();
  }

  const socialsRenderer = () => (
    <div className={classes.socials}>
      <a href="#" onClick={handleOnClickSocial} className={classnames([classes.social, classes.facebook])}>
        <span aria-hidden="true" className="icon-facebook"></span>
      </a>
      <a href="#" onClick={handleOnClickSocial} className={classnames([classes.social, classes.twitter])}>
        <span aria-hidden="true" className="icon-twitter"></span>
      </a>
      <a href="#" onClick={handleOnClickSocial} className={classnames([classes.social, classes.linkedin])}>
        <span aria-hidden="true" className="icon-linkedin"></span>
      </a>
      <a href="#" onClick={handleOnClickSocial} className={classnames([classes.social, classes.vimeo])}>
        <span aria-hidden="true" className="icon-vimeo"></span>
      </a>
    </div>
  )
  const tagsRenderer = () => (article.tagList.map(tag => (<div key={tag} className={classes.tag}>{tag}</div>)))
  const authorRenderer = () => (
    <div className={classes.author}>
      <span>
        <img className={classes.authorImage} src={article.author.image} alt="Photo" width={180} />
      </span>
      <div className={classes.authorDetail}>
        <div className={classes.authorName}>{article.author.username}</div>
        <div className={classes.authorJob}>{messages.authorJob}</div>
        <div className={classes.authorBio}>{messages.authorBio}</div>
      </div>
    </div>
  )

  const showArticle = () => {
    if (article) {
      return (
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
            <AddComment slug={article.slug} />
          </div>
        </GridListLayout>
      )
    }
  }

  return (
    <div>
      <Helmet>
        <title>Article</title>
        <meta name="description" content="Description of SingleArticle" />
      </Helmet>
      <Header title={messages.title} />
      {article && showArticle()}
      <Newsletter />
      <NotificationComponent
        onClose={handleCloseNotification}
        show={showNotification}
        title={messages.errNotificationTitle}
        content={messages.errNotificationContent}
      />
    </div>
  );
}

SingleArticle.propTypes = {
  getArticle: PropTypes.func,
  article: PropTypes.object,
  handleCloseNotification: PropTypes.func,
  showNotification: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  article: makeSelectArticle(),
  showNotification: makeSelectShowNotification(),
});

function mapDispatchToProps(dispatch) {
  return {
    getArticle: slug => dispatch(getArticleAction(slug)),
    handleCloseNotification: () => dispatch(setNotificationVisibilityAction(false)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SingleArticle);
