import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import { useRef, useState } from "react";
import { Modal } from "../../../../components/modal/modal";
import { CampaignForm } from "./capaignform";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';


export const Content=()=>{
    const hideModal=useRef(null);
    const[
        customEditorState,
        setEditorState
    ]=useState({
        editorState: EditorState.createEmpty()
    })

    const[
        convertedToHtml,
        setConvertedToHtml
    ]=useState(null);

    const{
        editorState
    }=customEditorState;
    
    const onEditorStateChange = (editorState) => {
        setEditorState({editorState})
    };

    const handleClick=()=>{
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const markup = draftToHtml(
            rawContentState
        );
        console.log(markup)
        setConvertedToHtml(markup)
    }

    return(
        <div className="p-3 d-flex flex-column justify-content-end align-items-end">
            <button 
                className="btn bg-slate-grey text-white mb-2 fl-r" 
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                onClick={handleClick}>save
            </button>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
            <Modal
                hidemodal={hideModal}
                body={<CampaignForm
                            hideModal={hideModal}
                            convertedToHtml={convertedToHtml}
                        />
                }
                large={true}
            />   
            
        </div>
    )
}