/**
 *
 * TitleComponent
 *
 */

import React from 'react';
import messages from './messages';
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
  const classes = useStyles();
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
