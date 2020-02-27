/*
 * Category Messages
 *
 * This contains all the text for the Category container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Category';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Category container!',
  },
  title: 'Categories',
  duplexHome: 'Duplex Home',
  drawingRooms: 'Drawing Room',
  bedrooms: 'Bedrooms',
  kitchenRooms: 'Kitchen Rooms',
  bathrooms: 'Bathrooms',
  gardenHome: 'Garden Home',
  animationDesign: 'Animation Design',
});
