export const Settings =()=>{
    return(
        <>
            <p className="fs-5">
                Below is general information of the automation.
                You can update the settings and click `Save` button.
            </p>
            <form>
                <div className="d-flex flex-column mb-2">
                    <label
                        className="fw-bold" 
                        htmlFor="aname"
                    >
                        Automation name *
                    </label>
                    <input 
                        type="text"
                        className="p-2 rounded wt-50 bg-alice border border-white"
                    />
                </div>
                <div className="d-flex flex-column mb-2">
                    <label
                        className="fw-bold" 
                        htmlFor="audience"
                    >
                        Audience
                    </label>
                    <select 
                        name="audience" 
                        id="audience"
                        className="fs-5 p-2 rounded text-white bg-slate-grey border-white wt-50"
                        >
                        {
                            [
                                "8000 banking leads"
                            ]?.map((drop,index)=>{
                                return(
                                    <option 
                                        value={drop}
                                        key={index}
                                    >{drop}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="d-flex flex-column mb-3">
                    <label
                        className="fw-bold" 
                        htmlFor="timezone"
                    >
                       Timezone
                    </label>
                    <select 
                        name="timezone" 
                        id="timezone"
                        className="fs-5 p-2 rounded text-white bg-slate-grey border-white wt-50"
                        >
                        {
                            [
                                "(GMT+09:00) asia/Tokyo"
                            ]?.map((drop,index)=>{
                                return(
                                    <option 
                                        value={drop}
                                        key={index}
                                    >{drop}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className="btn tbn-md b-grey text-white">Save</button>
            </form>
            <div>
                <p className="fs-5 fw-bold mt-3">Dangerous Zone</p>
                <p className="fs-6">Click to completely delete this automation along with its data. This action cannot be undone</p>
                <button className="btn tbn-md b-grey text-white mb-5">Delete</button>
            </div>
        </>
    )
}