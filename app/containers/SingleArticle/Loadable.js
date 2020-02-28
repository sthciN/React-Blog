/**
 *
 * Asynchronously loads the component for SingleArticle
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
