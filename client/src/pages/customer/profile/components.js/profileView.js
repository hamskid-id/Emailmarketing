import { useEffect, useState } from "react";
import { MyProfile } from "./myprofile";
import { ContactInformation } from "./contact";
// import { ApiToken } from "./apiToken";
import { useDispatch, useSelector } from "react-redux";
import { GetContactInfo, GetProfilePics } from "../../../../store/authSlice";

export const ProfileView =()=>{
    const auth = useSelector(
        state => state.auth
    );
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetProfilePics({id:auth.userdata?.user?.id}));
        dispatch(GetContactInfo({id:auth.userdata?.user?.id}));
    },[dispatch,auth.userdata?.user?.id])

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
            <div className="bg bg-white pdx-4">
                {
                    ListSection.components
                }
            </div>
        </div>
    )
}