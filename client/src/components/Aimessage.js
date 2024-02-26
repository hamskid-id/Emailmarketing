import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { apiBaseUrl } from "../store/api"
import { NumberedList } from "./NumberedList"
import Spinner from "./spinner/spinner"
import { AiOutlineSend } from "react-icons/ai";

export const AiMessage =()=>{
    const [aimessage, setAiMessage] = useState({
        prompt:"",
        message:""
    });
    const [loading,setLoading] = useState(false)
    const AskAI = async(e)=>{
        e.preventDefault();
        try{
            setAiMessage((prevState)=>{
                return{
                    ...prevState,
                    prompt:e.target.aiForm.value
                }
            })
            setLoading(true)
            const response = await axios.post(
                `${apiBaseUrl}/aimessage`,
                {
                    "message":e.target.aiForm.value
                },{
                    headers:{
                        "Authorization":`Bearer Bearer ${JSON.parse(localStorage.getItem('marketingUserToken'))?.access_token}`,
                        "Content-Type": 'multipart/form-data',
                        "Accept":'application/json'
                    }
                }
            );
            const{
                ai,
                message,
                success
            }=response?.data[0];
            if(success){
                toast(message)
            }else{
                toast.error(message)
            }
            setAiMessage((prevState)=>{
                return{
                    ...prevState,
                    message:ai
                }
            })
            setLoading(false)
        }catch(err){
            setLoading(false)
            toast.error(err?.response?.data?.message)
        }
    }
    console.log(aimessage)
    return(
        <form
            onSubmit ={(e)=>AskAI(e)}
            className="border p-4"
        >
            <div><b>Prompt</b> : {aimessage.prompt}</div>
            <div className="py-4">
                {
                    loading?
                    <span 
                        className="spinner-border spinner-border-md" 
                        role="status" 
                        aria-hidden="true">
                    </span>:
                    <NumberedList
                        response={aimessage.message}
                    />
                }
            </div>
            <div className="d-flex border rounded">
                <textarea 
                    placeholder="Ask Me Something..."
                    name="aiForm"
                    className="w-100"
                />
                <button
                    className="btn btn-md bg-slate-grey text-white"
                    type="submit"
                >
                    <AiOutlineSend size="1rem" color="white"/>
                </button>
            </div>
        </form>
    )
}