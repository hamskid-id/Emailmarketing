export const Recipients  =()=>{
    return(
        <div className="py-4">
            <p className="fs-3">0 Recipients</p>
            <div className="d-flex wrap justify-content-between">
                {
                    [
                        {
                            action:"From",
                            content:"Mail lists from ClickFunnel"
                        },{
                            action:"Subject",
                            content:"Newsletter test #0041"
                        }
                        ,{
                            action:"From Email@",
                            content:"jolie@acellemail.com"
                        }
                        ,{
                            action:"From Name",
                            content:" Account Manager - Jolie Kennedy"
                        }
                    ]?.map((camp,index)=>{
                        const{
                            action,
                            content
                        }=camp
                        return(
                            <div 
                                key={index}
                                className="d-flex wt-50 mb-3">
                                <span className="rounded border px-2 py-1 me-3">
                                   {action}
                                </span>
                                <span className="text-primary">
                                    {content}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}