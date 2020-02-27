/**
 *
 * Asynchronously loads the component for GridListLayout
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
