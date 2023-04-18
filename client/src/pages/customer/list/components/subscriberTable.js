import {useState } from "react";
import {useSelector } from "react-redux";
import Spinner from "../../../../components/spinner/spinner";
import { Actions } from "./subAction";
import { NoData } from "../../../../components/nodata";

export const SubscriberTable=({
    content
})=>{
        const subsriber = useSelector(
            state => state.subscriber
        )

        const[
            itemToDelete,
            setItemToDelete
        ]=useState([])

        if(subsriber.GetSubscribersStatus ==='pending'){
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
                deleteArray={itemToDelete}
            />
            <div className="w-overflow">
                <table className="table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">State</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                            {/* <th scope="col">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                             content?.subscribers?.map((sub,index)=>{
                                    const{
                                        email,
                                        fname,
                                        lname,
                                        country,
                                        state,
                                        phone,
                                        dob,
                                        id
                                    }=sub
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
                                            <td>{email}</td>
                                            <td>{fname}</td>
                                            <td>{lname}</td>
                                            <td>{country}</td>
                                            <td>{state}</td>
                                            <td>{phone}</td>
                                            <td>{dob}</td>
                                           
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
            {
                content
                .subscribers?.length === 0 && <NoData/>
            }
        </>
    )
}