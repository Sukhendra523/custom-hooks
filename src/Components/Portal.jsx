import { createPortal } from 'react-dom';
import { node } from 'prop-types';

/*
 * We can use this portal to render tooltip/modal/popup etc. in portal root DOM which is outside of app root DOM tree
 */

const Portal = ({ children }) => {
  const portalElement = document.getElementById('portal');
  return createPortal(children, portalElement);
};

Portal.prototype = {
  children: node
};

export default Portal;
