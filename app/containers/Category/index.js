/**
 *
 * Category
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCategory from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import { Nav } from 'react-bootstrap';

const useStyles = createUseStyles(theme => ({
  container: {
    margin: [theme.esDistance * 12, 0],
    textAlign: 'left',

    '& > hr': {
      margin: [0, theme.esDistance * 2],
      marginTop: 'unset',
      marginBottom: 'unset',
    },
  },
  category: {
    color: theme.textMute,
  },
}))

export function Category() {
  useInjectReducer({ key: 'category', reducer });
  useInjectSaga({ key: 'category', saga });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h5>{messages.title}</h5>
      <Nav.Link className={classes.category}>{messages.duplexHome}</Nav.Link>
      <hr />
      <Nav.Link className={classes.category}>{messages.drawingRooms}</Nav.Link>
      <hr />
      <Nav.Link className={classes.category}>{messages.bedrooms}</Nav.Link>
      <Nav.Link className={classes.category}>{messages.kitchenRooms}</Nav.Link>
      <hr />
      <Nav.Link className={classes.category}>{messages.bathrooms}</Nav.Link>
      <Nav.Link className={classes.category}>{messages.gardenHome}</Nav.Link>
      <hr />
      <Nav.Link className={classes.category}>{messages.animationDesign}</Nav.Link>
    </div>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
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

export default compose(withConnect)(Category);
