import axios from "axios";
import { useEffect, useRef, useState } from "react";
import EmailEditor from 'react-email-editor';
import { toast } from "react-toastify";
import { Modal } from "../../../../components/modal/modal";
import { apiBaseUrl, setHeaders } from "../../../../store/api";
import { TemplateForm } from "./templateform";

export const EditTemplateView =({
    campaignParams,
    setCampaignparams,
    id
})=>{
    
   const emailEditorRef = useRef(null);
   const[ 
    EditedInfo, 
    setEditedInfo
    ] = useState({})

    const FetchTemplate = async () =>{
        try{
            const response = await axios.get(
                `${apiBaseUrl}/viewusertemp`,
                    setHeaders()
            )
            const {
                status,
                message
            }=response?.data

            if(status){
                message?.map((temp)=>{ 
                    if(temp.id == id ){
                        setEditedInfo(temp)
                    }
                })
            }
            return response?.data
        } catch(err){
                toast(err.response?.data?.message)
        }
    }
    const exportHtml = () => {
        emailEditorRef
            .current.editor
            .exportHtml((data) => {
            const { design, html } = data;
            setEditedInfo({
                ...EditedInfo,
                design_content:JSON.stringify(design),
                design_html:html
            })
            
        });
    };

    useEffect(()=>{
        if(EditedInfo.design_content){
            emailEditorRef.current.editor.loadDesign(JSON.parse(EditedInfo.design_content))
        }
    },[EditedInfo])

    const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        if(id){
            FetchTemplate()
        }
    }

    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };

    const handleSave=()=>{
        exportHtml();
        // console.log("html", EditedInfo.html);
        console.log("design", EditedInfo.design_content);
    }


    return(
        <>
            <div className="d-flex fl-r me-3 mb-3">
                <button 
                    className="btn b-grey me-3"
                    type="button"                            
                    data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop"
                    onClick={exportHtml}  
                >Save
                </button>
            </div>
            <div className="w-overflow">
                <EmailEditor 
                    ref={emailEditorRef} 
                    onLoad={onLoad} 
                    onReady={onReady} 
                />
            </div>                  
            <Modal
                title="Template Information"
                body={<TemplateForm
                    campaignParams={campaignParams}
                    setCampaignparams={setCampaignparams}
                    EditedInfo={EditedInfo}
                />}
            />
        </>
    )
}