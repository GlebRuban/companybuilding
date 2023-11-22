import './model.css'
import { Transition } from 'react-transition-group';
export const PopUp = ({isOpen,onClose,children}) => {
  const close = onClose; 
  const onWrapperClick = (event) => {
    if(event.target.classList.contains("model_wrapper")) onClose()
  }
  return <>
  <Transition in={isOpen} timeout={300} unmountOnExit={true}>
    {(state) => (
      <div className={`model model--${state}`} onClick={onWrapperClick}>
        <div className="model_wrapper">
          <div className="model-content">
            {children}
            <button 
              onClick={close} 
              className="model_close"
            >X
            </button>
          </div>
        </div>
      </div>
    )}
    </Transition>
  </>
}