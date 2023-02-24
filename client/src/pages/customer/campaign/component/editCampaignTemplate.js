import { useRef, useState } from "react";
import EmailEditor from 'react-email-editor';
import { Modal } from "../../../../components/modal/modal";
import { TemplateForm } from "./templateform";

export const EditTemplateView =({
    campaignParams,
    setCampaignparams
})=>{
    const emailEditorRef = useRef(null);
    const [
        EditedInfo, 
        setEditedInfo
    ] = useState({
        html:null,
        design:null
    })    
    const exportHtml = () => {
        emailEditorRef
            .current.editor
            .exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
            setEditedInfo({
                html,
                design
            })
        });
    };

    const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    }

    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };

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