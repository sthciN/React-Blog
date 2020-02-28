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
import { Row, Col } from 'react-bootstrap';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGridListLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import Sidebar from '../Sidebar';

export function GridListLayout({ children }) {
  useInjectReducer({ key: 'gridListLayout', reducer });
  useInjectSaga({ key: 'gridListLayout', saga });

  return (
    <div>
      <Row noGutters>
        <Col xs={2} />
        <Col xs={6}>
          <Row noGutters>
            {children}
          </Row>
        </Col>
        <Col xs={2} >
          <Sidebar />
        </Col>
        <Col xs={2} />
      </Row>
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
