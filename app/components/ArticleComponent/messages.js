/*
 * ArticleComponent Messages
 *
 * This contains all the text for the ArticleComponent component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ArticleComponent';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ArticleComponent component!',
  },
  by: 'By',
  date: 'Date', 
});
