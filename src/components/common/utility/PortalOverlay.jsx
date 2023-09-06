import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal-root');

const PortalOverlay = ({children}) => {
  return ReactDOM.createPortal(children, portalRoot);
}

export default PortalOverlay