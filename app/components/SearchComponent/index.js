/**
 *
 * SearchComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import { Form } from 'react-bootstrap';

const useStyles = createUseStyles(theme => ({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.textMute,
  },
  search: {
    fontSize: 14,
    color: theme.textMute,
    padding: [theme.esDistance * 5, theme.esDistance * 3],
    borderRadius: 20,
    backgroundColor: 'unset',
  },
  searchIcon: {
    display: 'flex',
    marginLeft: -(theme.esDistance * 7),
    alignItems: 'center',
  },
}))

function SearchComponent() {
  const classes = useStyles();
  return (
    <div className={classes.searchContainer}>
      <Form.Control type="textarea" className={classes.search} placeholder="search" />
      {/* There is no search input in react bootstrap library. I tried to put it manually. */}
      <div className={classes.searchIcon}>
        <span aria-hidden="true" class="icon-search"></span>
      </div>
    </div>
  );
}

SearchComponent.propTypes = {};

export default SearchComponent;
