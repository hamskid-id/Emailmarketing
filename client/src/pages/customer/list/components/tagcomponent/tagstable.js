
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "../../../../../components/actions";
import Spinner from "../../../../../components/spinner/spinner";

export const TagContainer =()=>{
    const navigate = useNavigate()
    const tag = useSelector(
        state => state.tag
    )
    const[
        itemToDelete,
        setItemToDelete
    ]=useState([])

    if(tag.GetTagsStatus ==='pending'){
        return <Spinner/>
    }
    const handleChange=(e,{id})=>{
        const newArray = itemToDelete.filter(item=>item!==id)
        setItemToDelete((prevState)=>{
            if(e.target.checked){
                return[
                ...prevState,
                    id
                ]
            }else{
                return newArray
            }
        })
        
    }
    return(
        <>
        <Actions
            actionName="Add Tag"
            deleteArray={itemToDelete}
        />
        <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tag
                            .Tags?.map((tag,index)=>{
                                const{
                                    name,
                                    updated_at,
                                    created_at,
                                    id
                                } = tag
                                return(
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>
                                            <input 
                                                className="darkform-check-input p-2 border border-white rounded form-check-input me-1"
                                                type="checkbox"
                                                onChange={(e)=>handleChange(e,{id})}
                                            />
                                        </td>
                                        <td>{name}</td>
                                        <td>{
                                                new Date(created_at)
                                                .toLocaleString()
                                            }
                                        </td>
                                        <td>{
                                                new Date(updated_at)
                                                .toLocaleString()
                                            }</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="dropdown">
                                                    <button 
                                                        className="btn btn-secondary dropdown-toggle" 
                                                        type="button" 
                                                        data-bs-toggle="dropdown" 
                                                        aria-expanded="false" 
                                                    >
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li
                                                            className="dropdown-item"
                                                            onClick={()=>navigate(`/user/tag/update/${id}`)}
                                                        >
                                                           Update
                                                        </li>
                                                        <li
                                                            className="dropdown-item"
                                                        >
                                                            Delete
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
       
        {
            tag
            .Tags.length === 0 &&(
                <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5 px-2">
                    <FaCartArrowDown
                        size="7rem"
                        color="grey"
                    />
                    <p className="fw-bold">
                        Your Tags List is presently empty
                    </p>
                    <div>
                        Dont worry click on Add tags to get started. 
                    </div>
                </div>
            )
        }
        </>
    )
}