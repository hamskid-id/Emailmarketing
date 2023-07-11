import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { subscriber_SliceActions } from "../../../../store/subscriberSlice"
import { useEffect } from "react"
import { CreateTag } from "./tagcomponent/tagsmodalcontent"
import { SubscriberModalContent } from "./subscribercomponent/subscriberForm"

export const Actions =({
    setModalBody,
    hidemodal
})=>{
    const tag = useSelector(
        state => state.tag
    )
    useEffect(()=>{
        if(tag && tag.Tags?.length ==0){
            setModalBody({
                title:"kindly create a tag to procceed",
                body: <CreateTag
                        hidemodal={hidemodal}
                        proceedWithNextOperationAfterSuccess={()=>setModalBody({
                            body:<SubscriberModalContent
                                    hidemodal={hidemodal}
                                />,
                            title:'Add Subscriber'
                        })}
                    />
            })
        }
    },[])
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        if(e.target.value ==="Name"){
            dispatch(subscriber_SliceActions.sortDataByName())
        }else{
            dispatch(subscriber_SliceActions.sortDataByEmail())
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
                                        name:"Name",
                                    },
                                    {
                                        name:"Email",
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
                        placeholder="Search..."
                        className="border btn mb-2"
                        onChange={(e)=>dispatch(subscriber_SliceActions.searchdata(e.target.value))}
                    />
                </div>
            </div>
            <div className="col-md-3">
                <div>
                    <button 
                        className="btn b-grey btn-md my-2 fl-r mb-2"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                    >
                        + New
                    </button>
                        
                </div>
            </div>
        </div>
    )
}