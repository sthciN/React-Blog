/**
 *
 * Asynchronously loads the component for MainContent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
