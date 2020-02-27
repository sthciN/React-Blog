/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import NavigationBarComponent from '../../components/NavigationBarComponent';
import TitleComponent from '../../components/TitleComponent';

const useStyles = createUseStyles(theme => ({
  container: {
    height: 470,
    padding: [theme.esDistance * 4, theme.esDistance * 60],
    background: `linear-gradient(-45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
  },
  titleContainer: {
    margin: 'auto',
    width: '50%',
    padding: theme.esDistance * 3,
    textAlign: 'center',
    marginTop: theme.esDistance * 38,
  },
}))

export function Header() {
  useInjectReducer({ key: 'header', reducer });
  useInjectSaga({ key: 'header', saga });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <NavigationBarComponent />
      </div>
      <div className={classes.titleContainer}>
        <TitleComponent />
      </div>
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
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

export default compose(withConnect)(Header);
