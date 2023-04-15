import { BasicInfo } from "./basicinfo"
import { ChangePassword } from "./resetPassword"
import LetteredAvatar from 'react-lettered-avatar';
import { useSelector } from "react-redux";

export const MyProfile =()=>{
    const handleChange =(e)=>{
        console.log(e.target.files[0]);
    }
    const auth = useSelector(
        state => state.auth
    )
    return(
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                        <p className="fs-4 text-center">
                            Profile Photo
                        </p>
                        <div>
                            <LetteredAvatar
                                backgroundColor="brown"
                                color="white"
                                size={100}
                                radius={50}
                                name={auth.userdata?.user?.name}
                            />
                        </div>
                        <div className="mb-pd">
                            <p className="fs-4 text-center">Update your photo</p>
                            <p className="fs-6 text-center">
                                Photo should be at least 300px x 300px
                                Acceptable file type is JPG/GIF/SVG
                                The current max upload file size is 2M
                            </p>
                            <div>
                                <label
                                    htmlFor="upload"
                                    className="btn btn-md btn-primary"
                                    >                                   
                                        Upload photo                                    
                                </label>
                                <input 
                                    type="file" 
                                    id="upload" 
                                    accept=".txt" 
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <BasicInfo/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <ChangePassword/>
                    </div>
                </div>
            </div>
        </>
    )
}