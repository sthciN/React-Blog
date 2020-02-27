/*
 * Sidebar Messages
 *
 * This contains all the text for the Sidebar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Sidebar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Sidebar container!',
  },
});
