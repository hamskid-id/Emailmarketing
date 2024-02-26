import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { campaign_SliceActions } from "../../../../store/campaignSlice";
import { toast } from "react-toastify";

export const Actions =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tag = useSelector(
        state => state.tag
    )
    const handleChange=(e)=>{
        if(e.target.value ==="Title"){
            dispatch(campaign_SliceActions.sortDataByTitle())
        }else{
            dispatch(campaign_SliceActions.sortDataByEmail())
        }
    }
    return(
        <div className="row">
            <div className="col-md-9 mb-2">
                <div className="d-flex wrap align-items-center">
                    <div className="d-flex align-items-end mb-2 wrap">
                        <div  className="me-3">
                            <label 
                                htmlFor="sort"
                                className="me-1">
                                Sort By:
                            </label>
                            <select 
                                name="sort" 
                                id="sort"
                                className="btn b-gainsboro me-2 mb-1"
                                onChange={handleChange}
                                >
                                {
                                    [
                                        {
                                            name:"Title"
                                        },
                                        {
                                            name:"Recipient"
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
                            placeholder="Search..."
                            className="btn border rounded mb-1"
                            onChange={(e)=>dispatch(campaign_SliceActions.searchdata(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div>
                     
                    {
                        tag.Tags?.length>0?(
                            <button 
                                type="button" 
                                className="btn b-grey btn-md my-2 fl-r mb-2 ms-2" 
                                onClick={
                                    ()=>navigate("/campaign/select-type")
                                }
                            >
                                Create Campaign
                            </button>
                        ):(
                             <button 
                                className="btn b-grey btn-md my-2 fl-r mb-2 ms-2"
                                type="button"
                                data-bs-toggle="modal" 
                                data-bs-target="#staticBackdrop"
                            >
                                + New 
                            </button>
                        )
                    }
                    <button 
                            type="button" 
                            className="btn b-grey btn-md my-2 fl-r mb-2 ms-2" 
                            onClick={
                                ()=>window.location.replace("/campaigns_status")
                            }
                        >
                        Check Campaign Status
                    </button>
                </div>
            </div>
        </div>
    )
}