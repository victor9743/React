import ModalCloseButton from './ModalCloseButton';
import './ModalWindow.scss';
 
function ModalWindow({children}) {
    return (
    <>
        <div className="modal-wrapper" aria-modal="true"
            role="dialog" tabIndex="-1">
            <div className="inner">
            <ModalCloseButton />
                {children}
            </div>
        </div>
    </>
    )
  }
  
  export default ModalWindow
