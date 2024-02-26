import { AiFillCopy } from "react-icons/ai";
import { toast } from "react-toastify";

export const NumberedList =({
    response
    })=>{
        if(response){
            return (
                <div className="response-container">
                  <div>
                        <p className="single-line-response">{response}</p>
                        <div>
                            <AiFillCopy 
                                size="1.5rem"
                                color="gainsboro"  
                                className="cursor-pointer"                              
                                onClick={() => {
                                    navigator.clipboard.writeText(response)
                                    toast("Copied to Clipboard")
                                }}
                            />
                        </div>
                    </div>
                </div>
              );
        }
        return(
            <div></div>
        )
}