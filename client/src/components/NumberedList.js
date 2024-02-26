import { AiFillCopy } from "react-icons/ai";
import { toast } from "react-toastify";

export const NumberedList =({
    response
    })=>{
        if(response){
            const responseItems = response.split('\n');
            const isList = responseItems.length > 1;
            return (
                <div className="response-container">
                  {isList ? (
                    // Render numbered list if multiple lines
                    <div>
                        <div>
                        {
                            responseItems.map((item, index) => {
                                const text = item.trim().slice(2);
                                return(
                                    <p 
                                        key={index} 
                                        className="numbered-list-item"
                                    >
                                        <div>{text}</div> {/* Use slicing to remove numbering */}
                                    </p>
                                )
                                }
                            )
                        }
                        </div>
                        <div>
                        <AiFillCopy 
                                size="1.5rem"
                                color="gainsboro"                                
                                onClick={() => {
                                    navigator.clipboard.writeText(response)
                                    toast("Copied to Clipboard")
                                }}
                            />
                        </div>
                    </div>
                  ) : (
                    // Render single line if not a list
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
                  )}
                </div>
              );
        }
        return(
            <div></div>
        )
}