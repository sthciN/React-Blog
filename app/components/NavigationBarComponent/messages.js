/*
 * NavigationBarComponent Messages
 *
 * This contains all the text for the NavigationBarComponent component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.NavigationBarComponent';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the NavigationBarComponent component!',
  },
  home: 'Home',
  about: 'About',
  screen: 'Screen',
  contact: 'Contact',
  createAccount: 'create Account',
});
