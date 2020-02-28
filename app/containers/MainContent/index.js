/**
 *
 * MainContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainContent from './selectors';
import reducer from './reducer';
import saga from './saga';
import GridListLayout from '../GridListLayout';
import { createUseStyles } from 'react-jss';
import Article from '../Article';

const useStyles = createUseStyles(theme => ({
  container: {
    marginBottom: theme.esDistance * 8,
    textAlign: '-webkit-center',
  },
}))

export function MainContent() {
  useInjectReducer({ key: 'mainContent', reducer });
  useInjectSaga({ key: 'mainContent', saga });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridListLayout><Article /></GridListLayout>
      </div>
    </div>
  );
}

MainContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainContent: makeSelectMainContent(),
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

export default compose(withConnect)(MainContent);
