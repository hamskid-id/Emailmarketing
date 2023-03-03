import { FaFileImport, FaRegArrowAltCircleDown } from "react-icons/fa"

export const ImportBlacklist =()=>{
    const handleChange =(e)=>{
        console.log(e.target.files[0]);
    }
    return(
        <div className="wt-50">
            <div className="d-flex align-items-center">
                <span className="me-3">
                    <FaRegArrowAltCircleDown
                        size="2rem"
                        color="grey"
                    />
                </span>
                <span className="fs-1">
                    Import
                </span>
            </div>
            <p className="fs-3">Upload your email blacklist</p>
            <h6 className="fs-5">
                Upload known invalid email addresses to your blacklist account. 
                Any blacklisted email addresses in your mail lists which matches a blacklisted email address is automatically marked as 
                `blacklisted` and will not be sent by any email campaign.
            </h6>
            <h6 className="fs-6 p-3 bg bg-primary text-white rounded">
                Choose an input file from your device to upload. Acceptable file type is TXT, 
                one email address per line. Server max file upload size is 2M.
            </h6>
            {/* <div className="p-2 rounded dotted">
                <FaFileImport
                color="grey"
                size="4rem"
                />
            </div> */}
            <div>
                <label 
                    className="d-flex align-items-center justify-content-center flex-column rounded wt-50 dotted pdw-1"
                    htmlFor="upload"
                    >
                    <span className="me-3">
                        <FaFileImport
                            size="6rem"
                            color="grey"
                        />
                    </span>
                    <span className="fs-1">
                        <h6 className="fs-5 text-primary">Upload</h6>
                    </span>
                </label>
                <input 
                    type="file" 
                    id="upload" 
                    accept=".txt" 
                    onChange={handleChange}
                />
            </div>
            <button className="btn b-grey btn-md mt-3">Import</button>
        </div>
    )
}