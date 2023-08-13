import axios from "axios";
import { useEffect, useRef, useState } from "react";
import EmailEditor from 'react-email-editor';
import { toast } from "react-toastify";
import { Modal } from "../../../../components/modal/modal";
import { apiBaseUrl, setHeaders } from "../../../../store/api";
import { TemplateForm } from "./templateform";
import { CreateTemplate } from "../../../../store/templateSlice";
import { useDispatch, useSelector } from "react-redux";

export const EditTemplateView =({
    campaignParams,
    setCampaignparams,
    type,
    id
})=>{
    const hidemodal = useRef(null);
    const [showSavedButton, setShowSaveButton] = useState(false);
    const dispatch= useDispatch();
    const template = useSelector(
        state => state.template
    )
   const emailEditorRef = useRef(null);
   const[ 
    EditedInfo, 
    setEditedInfo
    ] = useState({});
    const[
        templateSaved,
        setTemplateSaved
    ] = useState(false);

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
    const SubmitTemplate  =()=>{
        emailEditorRef
            .current.editor
            .exportHtml((data) => {
            const { design, html } = data;
            setEditedInfo({
                ...EditedInfo,
                design_content:JSON.stringify(design),
                design_html:html
            })
            dispatch(
                CreateTemplate({
                    template_name:EditedInfo.template_name,
                    template_describ:EditedInfo.template_describ,
                    design_content:JSON.stringify(design),
                    design_html:html,
                    template_type:"private"
                })
            )
            setTemplateSaved(true);
        });
    }
    useEffect(()=>{
        if(template.CreateTemplateStatus === 'success' && templateSaved){
            setCampaignparams({
                ...campaignParams,
                content:EditedInfo.design_html,
                sectionCompleted:3
            })
        }
    },[template.CreateTemplateStatus,templateSaved])
    

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
        setShowSaveButton(true);
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
                {
                    (template?.CreateTemplateStatus == 'pending' && type!='create' && showSavedButton)?(
                        <button 
                            className="btn b-grey me-3 text-white"
                            type="button"  
                            ><span 
                                className="spinner-border spinner-border-sm me-1" 
                                role="status" 
                                aria-hidden="true">
                            </span>Save & proceed
                        </button>
                    ): (type =='create' && showSavedButton)?(
                        <button 
                            className="btn b-grey me-3"
                            type="button"                            
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop"
                            onClick={handleSave}
                        >Save
                        </button>
                    ):showSavedButton?(
                        <button 
                            className="btn b-grey me-3"
                            type="button"                            
                            // data-bs-toggle="modal" 
                            // data-bs-target="#staticBackdrop"
                            onClick={SubmitTemplate}  
                        >Save & Proceed
                        </button>
                    ):null
                }
            </div>
            <div className="w-overflow">
                <EmailEditor 
                    ref={emailEditorRef} 
                    onLoad={onLoad} 
                    onReady={onReady} 
                />
            </div>                  
            <Modal
                hidemodal={hidemodal}
                title="Template Information"
                body={<TemplateForm
                    campaignParams={campaignParams}
                    setCampaignparams={setCampaignparams}
                    EditedInfo={EditedInfo}
                    hidemodal={hidemodal}
                />}
            />
        </>
    )
}