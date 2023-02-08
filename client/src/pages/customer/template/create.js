import { useRef, useState } from "react";
import { Modal } from "../../../components/modal/modal";
import { CreateNav } from "./components/createNav";
import EmailEditor from 'react-email-editor';
import { TemplateForm } from "./components/templateform";

export const CreateView =()=>{
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

    const handleSave=()=>{
        exportHtml();
        // console.log("html", EditedInfo.html);
        console.log("design", EditedInfo.design);
    }

    return(
        <>
            <CreateNav
                handleSave={handleSave}
            />
            <div className="w-overflow">
                <EmailEditor 
                    ref={emailEditorRef} 
                    onLoad={onLoad} 
                    onReady={onReady} 
                />
            </div>          
            <Modal
                title="Template Information"
                body={<TemplateForm/>}
            />
        </>
    )
}