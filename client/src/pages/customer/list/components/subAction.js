import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { subscriber_SliceActions } from "../../../../store/subscriberSlice"
import { useEffect, useState } from "react"
import { CreateTag } from "./tagcomponent/tagsmodalcontent"
import { SubscriberModalContent } from "./subscribercomponent/subscriberForm"
import * as XLSX from "xlsx";
import { UploadSubcriberCSV } from "./subscribercomponent/uploadcsv"

export const Actions =({
    setModalBody,
    setCreateType,
    createType,
    hidemodal
})=>{
    const tag = useSelector(
        state => state.tag
    )
    const [items, setItems] = useState([]);
    // useEffect(()=>{
    //     if(tag && tag.Tags?.length ==0){
    //         setModalBody({
    //             title:"kindly create a tag to procceed",
    //             body:<CreateTag
    //                     hidemodal={hidemodal}
    //                     proceedWithNextOperationAfterSuccess={()=>setModalBody({
    //                         body:<SubscriberModalContent
    //                                 hidemodal={hidemodal}
    //                             />,
    //                         title:'Add Subscriber'
    //                     })}
    //                 />
    //         })
    //     }
    // },[])
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        if(e.target.value ==="Name"){
            dispatch(subscriber_SliceActions.sortDataByName())
        }else{
            dispatch(subscriber_SliceActions.sortDataByEmail())
        }
    }

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
    
          fileReader.onload = (e) => {
            const bufferArray = e.target.result;
    
            const wb = XLSX.read(bufferArray, { type: "buffer" });
    
            const wsname = wb.SheetNames[0];
    
            const ws = wb.Sheets[wsname];
    
            const data = XLSX.utils.sheet_to_json(ws);
    
            resolve(data);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    
        promise.then((d) => {
          setItems(d);
          console.log(items)
        });
      };

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
                        className="btn b-grey btn-md my-2 fl-r mb-2 me -2"
                        type="button"                            
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        onClick={()=>{
                            if(tag && tag.Tags?.length ==0){
                                setModalBody({
                                    title:"kindly create a tag to procceed",
                                    body:<CreateTag
                                            hidemodal={hidemodal}
                                            proceedWithNextOperationAfterSuccess={()=>setModalBody({
                                                body:<SubscriberModalContent
                                                        hidemodal={hidemodal}
                                                    />,
                                                title:'Add Subscriber'
                                            })}
                                        />
                                })
                            }else{
                                setModalBody(
                                    {
                                        body:<SubscriberModalContent
                                                hidemodal={hidemodal}
                                            />,
                                        title:'Add Subscriber'
                                    }
                                )
                            }
                        }}
                    >
                        + New
                    </button>
                    <label
                        className="btn dotted btn-md my-2 fl-r mb-2 me-2 text-dark"
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        onClick={
                            ()=>{
                                setCreateType('csv');
                                setModalBody({
                                    title:tag && tag.Tags?.length ===0? "kindly create a tag":"kindly select a tag ",
                                    body:<UploadSubcriberCSV
                                            hidemodal={hidemodal}
                                        />
                                })
                            }
                        }
                        >         
                            Upload CSV File                                   
                    </label>
                    {/* <input
                        type="file"
                        id="upload"
                        className="btn b-grey btn-md my-2 fl-r mb-2 me-2"
                        onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                        }}
                    /> */}
                </div>
            </div>
        </div>
    )
}