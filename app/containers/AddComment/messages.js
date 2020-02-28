/*
 * AddComment Messages
 *
 * This contains all the text for the AddComment container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AddComment';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AddComment container!',
  },
  write: 'Write Your Comment',
  name: 'Name',
  email: 'Email Address',
  message: 'Message',
  submit: 'Submit',
});
