import { useEffect } from "react";
import Emojis from "./emojis"


const ModalConfirmSubmit = ({ show, setShow }) => {
    const closeOnOutsideClick = (e) => {
        if (show && e.target.classList.contains('modal-background')) {
            console.log("first")
          setShow(false);
        }
      };
    
      useEffect(() => {
        if (show) {
          document.addEventListener('click', closeOnOutsideClick);
        } else {
          document.removeEventListener('click', closeOnOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', closeOnOutsideClick);
        };
      }, [show]);
    return (
        <>
           {show && <div className="w-screen h-screen fixed bg-transparent flex mt-36 ml-80 modal-background ">  
            <div className="w-72 h-72">
                <Emojis/>
            </div>
            </div>}
        </>
    )
}

export default ModalConfirmSubmit 