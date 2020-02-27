/**
 *
 * TitleComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    color: theme.textWhite,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
  },
}))

function TitleComponent() {
  // const history = useHistory();
  const classes = useStyles();
  console.log("TCL: TitleComponent -> history", history);
  return (
    <div className={classes.container}>
      <div className={classes.title}>{messages.title}</div>
      {/* TODO useLocation */}
      <div>Home - Blog</div>
    </div>
  );
}

TitleComponent.propTypes = {};

export default TitleComponent;
