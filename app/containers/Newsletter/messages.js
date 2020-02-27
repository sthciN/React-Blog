/*
 * Newsletter Messages
 *
 * This contains all the text for the Newsletter container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Newsletter';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Newsletter container!',
  },
  title: 'Subscribe Our Newsletter',
  description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  subscribe: 'Subscribe',
  emailPlaceHolder: 'Enter Email Address',
  poweredByWordPress: 'Powered by WordPress',
  designedBy: 'Designed by GoldenLayers',
  navigation: {
    home: 'HOME',
    aboutUs: 'ABOUT US',
    pages: 'PAGES',
    gallery: 'GALLERY',
    blog: 'BLOG',
    contact: 'CONTACT',
  },

});
