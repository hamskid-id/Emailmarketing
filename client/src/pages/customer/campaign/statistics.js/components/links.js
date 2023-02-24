export const Links =()=>{
    return(
        <div>
            <p className="fs-3">1 Link</p>
            <div className="w-overflow">
            <table className=" table table-striped table-hover table-bordered table-responsive mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">URL</th>
                        <th scope="col">Total clicks</th>
                        <th scope="col">Last clicked</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                       [
                        {
                            url:"http://sales.sample.com/promotion",
                            totalClicks:12,
                            lastClicked:"2023-02-23 07:06:58"
                        }
                       ]?.map((camp,index)=>{
                            const{
                                url,
                                totalClicks,
                                lastClicked
                            }=camp
                            return(
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>
                                        <a href={url}>{url}</a>
                                    </td>
                                    <td>{totalClicks}</td>
                                    <td>{lastClicked}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                {/* {
                   []?.length === 0 &&(
                        <div className="d-flex flex-column jutstify-content-center align-items-center border rounded my-3 py-5">
                            <FaCartArrowDown
                                color="grey"
                                size="7rem"
                            />
                            <p className="fw-bold">
                                Your Link List is presently empty
                            </p>
                        </div>
                    )
                } */}
            </div>
        </div>
    )
}