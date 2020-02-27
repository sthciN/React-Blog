/**
 *
 * Asynchronously loads the component for Newsletter
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
