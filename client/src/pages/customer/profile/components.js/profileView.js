import { useState } from "react";
import { MyProfile } from "./myprofile";
import { ContactInformation } from "./contact";
import { ApiToken } from "./apiToken";
import { useSelector } from "react-redux";

export const ProfileView =()=>{
    const auth = useSelector(
        state => state.auth
    )
    const[
        ListSection,
        setListSection
    ]=useState({
        name:"My profile",
        components:<MyProfile/>
    })

    return(
        <div className="pt-5 bg-lightBlue">
            <p className="fs-1 cl-blue fw-bold text-center pdx-4">
                {auth.userdata?.user?.name}
            </p>
            <div className="d-flex align-items-center w-overflow mt-4 pdx-4">
                {
                    [
                        {
                            name:"My profile",
                            components:<MyProfile/>
                        },
                        {
                            name:"Contact information",
                            components:<ContactInformation/>
                        }
                        // {
                        //     name:"Api token",
                        //     components:<ApiToken/>
                        // },
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
            <hr className="b-grey mt-0 pdx-4"/>
            <div className="bg bg-white pdx-4">
                {
                    ListSection.components
                }
            </div>
        </div>
    )
}