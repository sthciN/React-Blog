/**
 *
 * NavigationBarComponent
 *
 */

import React from 'react';
import messages from './messages';
import { createUseStyles } from 'react-jss';
import { Nav } from 'react-bootstrap';

const useStyles = createUseStyles(theme => ({
  container: {
    '& .nav': {
      marginTop: theme.esDistance * 2,
    },
    '& .nav-item': {
      height: 40,
    },
  },
  createAccount: {
    marginLeft: theme.esDistance * 10,
    padding: [0, theme.esDistance],
    border: [1, 'solid', theme.textWhite],
    borderRadius: 30,
  },
}))


function NavigationBarComponent() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
    </div>
  );
}

NavigationBarComponent.propTypes = {};

export default NavigationBarComponent;
