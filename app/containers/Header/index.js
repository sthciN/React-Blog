/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';
import { createUseStyles } from 'react-jss';
import NavigationBarComponent from '../../components/NavigationBarComponent';
import TitleComponent from '../../components/TitleComponent';
import logo from '../../assets/images/theBigD.png';

const useStyles = createUseStyles(theme => ({
  container: {
    height: 470,
    padding: [theme.esDistance * 4, theme.esDistance * 55],
    background: `linear-gradient(-45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
    marginBottom: theme.esDistance * 30,
  },
  navbar: {
    marginTop: theme.esDistance * 2,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  titleContainer: {
    margin: 'auto',
    width: '50%',
    padding: theme.esDistance * 3,
    textAlign: 'center',
    marginTop: theme.esDistance * 38,
  },
}))

export function Header({title}) {
  useInjectReducer({ key: 'header', reducer });
  useInjectSaga({ key: 'header', saga });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <NavigationBarComponent />
        <img src={logo} width={60} alt="Logo" />
      </div>
      <div className={classes.titleContainer}>
        <TitleComponent title={title} />
      </div>
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string,
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
