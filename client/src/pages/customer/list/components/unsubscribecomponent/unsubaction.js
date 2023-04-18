import { useDispatch } from "react-redux"
import { unsubscriber_SliceActions } from "../../../../../store/UnsubscribeSlice";

export const Actions =({
    HandleDownloadPdf,
    printRef
})=>{
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        if(e.target.value ==="Name"){
            dispatch(unsubscriber_SliceActions.sortDataByName())
        }else{
            dispatch(unsubscriber_SliceActions.sortDataByEmail())
        }
    }

    return(
        <div className="row">
            <div className="col-md-9 mb-2">
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
                            className="btn me-3 rounded b-gainsboro mb-1"
                            onChange={handleChange}
                            >
                            {
                                [
                                    {
                                        name:"Email"
                                    },
                                    {
                                        name:"Name"
                                    }
                                ]?.map((drop,index)=>{
                                    const {
                                        name
                                    }=drop
                                    return(
                                        <option
                                            className="fs-6" 
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
                        className="border btn mb-2"
                        onChange={(e)=>dispatch(unsubscriber_SliceActions.searchdata(e.target.value))}
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <button 
                        className="btn b-grey btn-md my-2 fl-r"
                        onClick={()=>HandleDownloadPdf(printRef)}  
                    >
                        download
                    </button>
                </div>
            </div>
        </div>
    )
}