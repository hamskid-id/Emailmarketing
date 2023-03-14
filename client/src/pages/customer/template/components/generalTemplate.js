import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Spinner from "../../../../components/spinner/spinner";
import { GetGeneralTemplate } from "../../../../store/templateSlice";
import { Actions } from "./actions"

export const GeneralList =()=>{
    const navigate = useNavigate();
    const template = useSelector(
        state => state.template
    )
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetGeneralTemplate(null));
    },[dispatch])
    
    if(template.GetGeneralTemplateStatus ==='pending'){
        return <Spinner/>
    }
    return(
        <>
            <Actions/>
            <div className="row justify-content-between wrap">
                {
                    template.generalTemp?.map((tem,index)=>{
                        const{
                            template_name,
                            id,
                            template_describ,
                        }=tem
                        return(
                            <div 
                                className="col-lg-2 col-md-3 col-sm-4 col-xs-6"                           
                                key={index}
                            >
                                <div className="d-flex flex-column m-3 border rounded bg bg-white shadow"
                                >
                                    <img
                                        src="https://res.cloudinary.com/hamskid/image/upload/v1675956824/thumb_ymavb0.svg"
                                        className="w-100 rounded"
                                        alt="object not found"
                                    />
                                    <div className="d-flex flex-column align-items-center justify-content-center pd-1">
                                        <p 
                                            className="fw-bold break"
                                        >
                                            {template_name}
                                        </p>
                                        <p 
                                            className="break"
                                        >
                                            {template_describ}
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
                                                onClick={
                                                    ()=>navigate(`/edit/template/${id}`)
                                                }
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