/*
 * TitleComponent Messages
 *
 * This contains all the text for the TitleComponent component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TitleComponent';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TitleComponent component!',
  },
  title: 'Our Blog',
  homeLocation: 'Home',
});
