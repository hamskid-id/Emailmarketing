import { useNavigate } from "react-router-dom"
import { basicTemp } from "./basictemp";


export const BasicContainer =()=>{
    const navigate = useNavigate();
    return(
        <div className="mb-3">
            <p className="fs-4">
                Basic
            </p>
            <div className="row">
                {
                    basicTemp.map((temp, index)=>{
                        const{
                            id,
                            img,
                            head,
                            subHead
                        }=temp
                        return(
                            <div 
                                key={index}
                                onClick={
                                    ()=>navigate(
                                        `/create/template/${id}`
                                    )
                                }
                                className="col-md-3"
                            >
                                <div className="p-2">
                                    <img
                                        src={img}
                                        alt="object not found"
                                        className="w-100 rounded mb-2"
                                    />
                                    <p className="text-center fs-5">
                                        {head}
                                    </p>
                                    <p className="text-center fs-6">
                                        {subHead}
                                    </p>
                                </div>
                           </div>
                        )
                    })
                }
            </div>
        </div>
    )
}