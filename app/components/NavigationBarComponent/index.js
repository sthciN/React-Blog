/**
 *
 * NavigationBarComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { create } from 'react-test-renderer';
import { createUseStyles } from 'react-jss';
import { Nav } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'flex',
  },
  createAccount: {
    marginLeft: theme.esDistance * 10,
    padding: [0, theme.esDistance * 2],
    border: [1, 'solid', theme.textWhite],
    borderRadius: 30,
  },
  eachItem: {
    margin: [0, theme.esDistance * 4],
    color: theme.textWhite,
  },
}))


function NavigationBarComponent() {
  const classes = useStyles();
  // const history = useHistory();
  // console.log("TCL: NavigationBarComponent -> history", history);
  return (
    <Nav className="justify-content-end " activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" >{messages.home}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about">{messages.about}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="screen">{messages.screen}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact">{messages.contact}</Nav.Link>
      </Nav.Item>
      <Nav.Item className={classes.createAccount}>
        <Nav.Link eventKey="contact">{messages.createAccount}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

NavigationBarComponent.propTypes = {};

export default NavigationBarComponent;
