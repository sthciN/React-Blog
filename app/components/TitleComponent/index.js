/**
 *
 * TitleComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
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

function TitleComponent({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{messages.title}</div>
      <div>{messages.homeLocation} - {title}</div>
    </div>
  );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
};

export default TitleComponent;
