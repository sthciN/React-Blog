/*
 * SingleArticle Messages
 *
 * This contains all the text for the SingleArticle container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SingleArticle';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SingleArticle container!',
  },
  title: 'Blog Single',
  by: 'By',
  date: 'Date',
  tags: 'Tags',
  authorJob: 'Post Editor',
  authorBio: 'Lorem ipsum dolor sit amet, consectetur adiproiden ut aliquip ex ea commodo consequat. Duis Lorem ipsum dolor sit amet, consectetur adiproiden ut aliquip ex ea commodo consequat. Duis'
});
