/*
 * Article Messages
 *
 * This contains all the text for the Article container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Article';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Article container!',
  },
  errNotificationTitle: 'ERROR',
  errNotificationContent: 'Please try again later.',
});
