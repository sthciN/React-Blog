/**
 *
 * Sidebar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSidebar from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchComponent from '../../components/SearchComponent';
import Category from '../Category';
import LatestPost from '../LatestPost';

export function Sidebar() {
  useInjectReducer({ key: 'sidebar', reducer });
  useInjectSaga({ key: 'sidebar', saga });

  return (
    <>
      <SearchComponent />
      <Category />
      <LatestPost />
    </>
  );
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebar: makeSelectSidebar(),
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

export default compose(withConnect)(Sidebar);
