import { FaCartArrowDown } from "react-icons/fa"
import { TagContainer } from "./tagsContainer"

export const TagContent =()=>{
    return(
        <div>
            <p className="fs-1 mb-2">
                Tags
            </p>
            <div className="d-flex justify-content-end">
                <span>
                    <button 
                        className="btn btn-sm btn-primary"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                    >
                       Create Tag
                    </button>
                </span>
            </div>
            <div  className="w-overflow">
                <TagContainer/>
            </div>
            <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
                <FaCartArrowDown
                    color="grey"
                    size="7rem"
                />
                <p className="fw-bold">
                    You don't have any tags yet
                </p>
                <div>
                    Dont worry be the first one by clicking on create tag. 
                </div>
            </div>
        </div>
    )
}