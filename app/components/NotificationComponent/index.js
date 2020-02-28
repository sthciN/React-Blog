/**
 *
 * NotificationComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

function NotificationComponent({ show, title, content, onClose }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '100px',
      }}
    >
      <Toast
        show={show}
        onClose={onClose}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">{title}</strong>

        </Toast.Header>
        <Toast.Body>{content}</Toast.Body>
      </Toast>
    </div>
  );
}

NotificationComponent.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  onClose: PropTypes.func,
};

export default NotificationComponent;
