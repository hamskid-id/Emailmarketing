import { useDispatch } from "react-redux";
import { SpamReported_SliceActions } from "../../../../../store/SpamReportedSlice";

export const Actions =()=>{

    const dispatch = useDispatch();
    const handleChange=(e)=>{
        if(e.target.value === "Created At"){
            dispatch(SpamReported_SliceActions.sortDataByCreatedAt())
        }else{
            dispatch(SpamReported_SliceActions.sortDataByEmail())
        }
    }

    return(
        <div className="row">
            <div className="col-md-6 mb-2">
                <div className="d-flex wrap align-items-center">
                    <div  className="me-3 mb-2">
                        <label 
                            htmlFor="sort"
                            className="me-1">
                            Sort By:
                        </label>
                        <select 
                            name="sort" 
                            id="sort"
                            className="btn rounded b-gainsboro"
                            onChange={handleChange}
                            >
                            {
                                [
                                    {
                                        name:"Created At"
                                    },
                                    {
                                        name:"Email"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name
                                    }=drop
                                    return(
                                        <option 
                                            value={name}
                                            key={index}
                                        >{name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input  
                        type="text"
                        placeholder="Type to search"
                        className=" rounded btn mb-2 border"
                        onChange={(e)=>dispatch(SpamReported_SliceActions.searchdata(e.target.value))}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div>
                     <button
                        className="btn b-grey btn-md my-2 fl-r mb-2"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                    >
                        Report Spam
                    </button>
                </div>
            </div>
        </div>
    )
}