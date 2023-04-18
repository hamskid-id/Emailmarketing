import { useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import { blacklist_SliceActions } from "../../../../../store/BlacklistedSlice"
export const Actions =()=>{
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        if(e.target.value ==="Email"){
            dispatch(blacklist_SliceActions.sortDataByEmail())
        }else{
            dispatch(blacklist_SliceActions.sortDataByCreatedAt())
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
                        placeholder="Search..."
                        className="btn action-inpt rounded"
                        onChange={(e)=>dispatch(blacklist_SliceActions.searchdata(e.target.value))}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div>
                     <button
                        className="btn b-grey btn-md my-2 fl-r"
                        type="button"
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"               
                    >
                        Import
                    </button>
                </div>
            </div>
        </div>
    )
}