import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Confirm } from "./confirm"
import { Recipient } from "./recipient"
import { Schedule } from "./schedule"
import { Setup } from "./setup"
import { TemplateChoice } from "./templatechoice"

export const CampaignContext = createContext(null);
export const CreateCampContextProvider=({
    children
})=>{

    const auth = useSelector(
        state => state.auth
    )

    const[
        campaignSection,
        setCampaignSection
    ] = useState({
        name:"Recipients",
        components:""
    })

    const[
        campaignParams,
        setCampaignparams
    ]=useState({
        campaignType:localStorage.getItem("campaigns") ? localStorage.getItem("campaigns"):"",
        content:"",
        NameYourCampaign:"",
        EmailSubject :"",
        FromName:auth.userdata?.user?.name,
        FromEmail:auth.userdata?.user?.email,
        ReplyTo:"",
        DeliveryDate:"",
        DeliveryTime:"",
        tag_id:null,
        status:0,
        sectionCompleted:0
    })

    const sections =[
        {
            name:"Recipients",
            components:<Recipient/>,
            active:0
        },
        {
            name:"Setup",
            components:<Setup/>,
            active:1
        },
        {
            name:"Template",
            components:<TemplateChoice/>,
            active:2
        },
        {
            name:"Schedule",
            components:<Schedule/>,
            active:3
        },
        {
            name:"Confirm",
            components:<Confirm/>,
            active:4
        },
    ]

    // const sections =[
    //     {
    //         name:"Recipients",
    //         components:<Recipient/>
    //     },
    //     {
    //         name:"Setup",
    //         components:<Setup/>
    //     },
    //     {
    //         name:"Template",
    //         components:<TemplateChoice/>
    //     },
    //     {
    //         name:"Schedule",
    //         components:<Schedule/>
    //     },
    //     {
    //         name:"Confirm",
    //         components:<Confirm/>
    //     },
    // ]

    // useEffect(()=>{
    //     sections?.map((sec,index)=>{
    //         const{
    //             name,
    //             components
    //         }=sec   
    //         if(campaignParams?.sectionCompleted===index){
    //             setCampaignSection({
    //                 name:name,
    //                 components:components
    //             })
    //             console.log(campaignParams?.sectionCompleted,index)
    //         }
    //     })      
    //     console.log("set")
    // },[campaignParams])

    return (
        <CampaignContext.Provider
            value={{
                campaignSection,
                sections,
                setCampaignSection,
                campaignParams,
                setCampaignparams
            }}>
            {children}
        </CampaignContext.Provider>
    )
}