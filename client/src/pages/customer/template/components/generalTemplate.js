import { Actions } from "../../../../components/actions"
import { basicTemp } from "./basictemp"

export const GeneralList =()=>{
    return(
        <>
            <Actions
                actionName="Create +"
            />
            <div className="row justify-content-between wrap">
                {
                    basicTemp.map((tem,index)=>{
                        const{
                            head,
                            subHead,
                            img,
                        }=tem
                        return(
                            <div 
                                className="col-lg-2 col-md-3 col-sm-4 col-xs-6"                           
                                key={index}
                            >
                                <div className="d-flex flex-column m-3 border rounded"
                                >
                                    <img
                                        src={img}
                                        className="w-100 rounded"
                                        alt="object not found"
                                    />
                                    <div className="d-flex flex-column align-items-center justify-content-center pd-1">
                                        <p 
                                            className="fw-bold break"
                                        >
                                            {head}
                                        </p>
                                        <p 
                                            className="break"
                                        >
                                            {subHead}
                                        </p>
                                        <div className="dropdown">
                                        <button 
                                            className="btn btn-secondary dropdown-toggle b-gainsboro" 
                                            type="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            Actions
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li 
                                                className="dropdown-item"
                                            >
                                                Preview
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                            

                        )
                    })
                }

            </div>
            
        </>
    )
}