import { useNavigate } from "react-router-dom"
import { featTemp } from "./featemp"

export const FeaturedContainer =()=>{
    const navigate = useNavigate();
    return(
        <div className="mb-3">
            <p className="fs-3">
                Featured
            </p>
            <div className="row">
                {
                    featTemp.map((temp, index)=>{
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