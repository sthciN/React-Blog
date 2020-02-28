/**
 *
 * Asynchronously loads the component for Article
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
