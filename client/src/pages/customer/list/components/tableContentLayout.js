import { useRef } from "react";
import { Modal } from "../../../../components/modal/modal";

export const Tablelayout=({
    title,
    subNumber,
    titleIcon,
    tableContainer,
    modalBody,
    modalTitle,
    hidemodal
})=>{
    
    return(
        <>
            <div className="mb-3 pb-2 bg-lightBlue pdx-4">
                <div className="d-flex align-items-center">
                    <span className="me-3">
                        {titleIcon}
                    </span>
                    <div className="fs-2">
                    {title}
                    </div>
                </div>
                {
                    subNumber &&(
                        <p className="fs-5 fw-bold">
                            {subNumber} {title}
                        </p>
                    )
                }
            </div>
            <div className="pdx-4">
                {tableContainer}
            </div>
            <Modal
                title={modalTitle}
                body={modalBody}
                hidemodal={hidemodal}
            />
        </>
    )
}