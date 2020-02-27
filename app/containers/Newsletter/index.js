/**
 *
 * Newsletter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNewsletter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import background from '../../assets/images/footer.png';
import { Form, Button, Nav } from 'react-bootstrap';

const useStyles = createUseStyles(theme => ({
  container: {
    height: 670,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    textAlign: 'center',
    color: theme.textWhite,
  },
  contentContainer: {
    padding: [theme.esDistance * 40, theme.esDistance * 60],
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: [theme.esDistance * 8, 0],
  },
  description: {
    width: 500,
    margin: 'auto',
    fontSize: 16,

  },
  subscribe: {
    margin: [theme.esDistance * 16, 0],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subscribeInput: {
    width: 300,
    height: 40,
    backgroundColor: theme.textWhite,
    borderRadius: 40,
  },
  subscribeButton: {
    padding: [0, theme.esDistance * 5],
    marginLeft: -(theme.esDistance * 29),
    borderRadius: 40,
    height: 36,
  },
  footer: {
    padding: [0, theme.esDistance * 20],
    fontSize: 14,
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.textWhite,
    backgroundColor: 'rgba(46,33,162, 0.2)',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
  },
  copyRight: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export function Newsletter() {
  useInjectReducer({ key: 'newsletter', reducer });
  useInjectSaga({ key: 'newsletter', saga });
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>{messages.title}</div>
        <div className={classes.description}>{messages.description}</div>
        <div className={classes.subscribe}>
          <Form.Control type="textarea" className={classes.subscribeInput} placeholder={messages.emailPlaceHolder} />
          <Button className={classes.subscribeButton} variant="primary">{messages.subscribe}</Button>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.copyRight}>
          {messages.designedBy} | {messages.poweredByWordPress}
        </div>
        <div className={classes.navigation}>
          <Nav.Link>{messages.navigation.home}</Nav.Link>
          <Nav.Link>{messages.navigation.aboutUs}</Nav.Link>
          <Nav.Link>{messages.navigation.pages}</Nav.Link>
          <Nav.Link>{messages.navigation.gallery}</Nav.Link>
          <Nav.Link>{messages.navigation.blog}</Nav.Link>
          <Nav.Link>{messages.navigation.contact}</Nav.Link>
        </div>
      </div>
    </div>
  );
}

Newsletter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newsletter: makeSelectNewsletter(),
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

export default compose(withConnect)(Newsletter);
