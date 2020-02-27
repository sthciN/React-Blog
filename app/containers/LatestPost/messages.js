/*
 * LatestPost Messages
 *
 * This contains all the text for the LatestPost container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LatestPost';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LatestPost container!',
  },
  title: 'Latest Posts',
  post: 'Post',
});
