/**
 *
 * AddComment
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddComment from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import { Form, Col, Button } from 'react-bootstrap';

const useStyles = createUseStyles(theme => ({
  container: {
    marginBottom: theme.esDistance * 8,
    '& .form-control': {
      color: theme.textMute,
      backgroundColor: 'unset',
      border: [1, 'solid', 'rgba(230,230,230,0.8)'],
    },
  },
  title: {
    marginBottom: theme.esDistance * 12,
    fontSize: 22,
  }
}))

export function AddComment({ slug }) {
  useInjectReducer({ key: 'addComment', reducer });
  useInjectSaga({ key: 'addComment', saga });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{messages.write}</div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="nameId">
            <Form.Control type="input" placeholder={messages.name} />
          </Form.Group>

          <Form.Group as={Col} controlId="emailId">
            <Form.Control type="email" placeholder={messages.email} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="messageId">
          <Form.Control as="textarea" rows="6" placeholder={messages.message} />
        </Form.Group>
        <Button variant="primary" >
          {messages.submit}
        </Button>
      </Form>
    </div>
  );
}

AddComment.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addComment: makeSelectAddComment(),
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

export default compose(withConnect)(AddComment);
