import { FaPlusCircle } from "react-icons/fa"

export const AutoConnector=({
        automations
    })=>{
    return(
        <div className="d-flex justify-content-center flex-column">
            {
                [
                    "New contact subscribes to mail list",
                    "Wait for 1 minute",
                ].map((
                        auto,
                        index)=>{
                    if(index>0){
                        return(
                            <div 
                                className="d-flex flex-column justify-content-center  align-items-center"
                                key={index}
                            >
                                <div 
                                    style={{
                                        height:"3rem",
                                        width:"1px"
                                    }} 
                                    className="border"
                                >
                                </div>
                                <h6 className="bg-white border p-2 rounded fw-bold">{auto}</h6>
                                <div 
                                    style={{
                                        height:"3rem",
                                        width:"1px"
                                    }} 
                                    className="border"
                                >
                                </div>
                                <FaPlusCircle
                                    size="1.7rem"
                                    color="darkslategrey"
                                    type="button"                            
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                />
                            </div>
                        ) 
                    }
                    return(
                        <div 
                            className="d-flex flex-column justify-content-center align-items-center"
                            key={index}
                        >
                            <h6 className="bg-white border p-2 rounded fw-bold">{auto}</h6>
                            <div 
                                style={{
                                    height:"3rem",
                                    width:"1px"
                                }} 
                                className="border"
                            >
                            </div>
                            <FaPlusCircle
                                size="1.7rem"
                                color="darkslategrey"
                                type="button"                            
                                data-bs-toggle="modal" 
                                data-bs-target="#staticBackdrop"
                            />
                        </div>
                    )           
                })
            }
        </div>
    )
}