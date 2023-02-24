import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { GetTags } from "../../../../store/tagSlice"
import { EmailVerification } from "./individuallistemailveri"
import { IndividualListSuscribers } from "./individualListSubscribers"
import { IndividualListOverView } from "./listOverviews"

export const ListOverView =()=>{
    const dispatch = useDispatch();
    const[
        ListSection,
        setListSection
    ]=useState({
        name:"Overviews",
        components:<IndividualListOverView/>
    })
    useEffect(()=>{
        dispatch(GetTags(null));
    },[dispatch])

    return(
        <>
            <p className="display-5">DB Insurance & Finance customers 2022</p>
            <div className="d-flex align-items-center">
                <span className="rounded bg bg-primary text-white px-2 py-1 me-3">
                    1,945
                </span>
                <span className="fw-bold fs-4">
                    Subscribers
                </span>
            </div>
            <div className="d-flex align-items-center w-overflow mt-4">
                {
                    [
                        {
                            name:"Overviews",
                            components:<IndividualListOverView/>
                        },
                        {
                            name:"Subscribers",
                            components:<IndividualListSuscribers
                                setListSection={setListSection}
                            />
                        },
                        {
                            name:"Email Verification",
                            components:<EmailVerification/>
                        },
                    ]?.map((section,index)=>{
                        const{
                            name,
                            components
                        }=section
                        return(
                            <div
                                key={index}
                                className="me-4"
                            >
                                <h6
                                    className={`fs-6 
                                        ${
                                            ListSection.name === name?
                                            `border-bottom-slate-grey p-2`:
                                            null
                                        }`
                                    }
                                    onClick={
                                        ()=>setListSection({
                                                name:name,
                                                components:components
                                        })
                                }
                                >
                                    {name}
                                </h6>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="b-grey mt-0"/>
            <div>
                {
                    ListSection.components
                }
            </div>
        </>
    )
}