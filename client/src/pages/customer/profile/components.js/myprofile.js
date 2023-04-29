import { UploadProfilePicture} from "../../../../store/authSlice";
import { BasicInfo } from "./basicinfo"
import { ChangePassword } from "./resetPassword"
import LetteredAvatar from 'react-lettered-avatar';
import { useDispatch, useSelector } from "react-redux";

export const MyProfile =()=>{
    
    const auth = useSelector(
        state => state.auth
    )
    const dispatch = useDispatch();

    const handleChange =(e)=>{
        const file = e.target.files[0]
        TransformFile(file)
    }

    const TransformFile = (file)=>{
        const reader = new FileReader()
        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = ()=>{
                dispatch(UploadProfilePicture({
                    pics:reader.result,
                    id:auth.userdata?.user?.id
                }))
            }
        }
    }


    return(
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                        <p className="fs-4 text-center">
                            Profile Photo
                        </p>
                        <div>
                            {
                                auth.profilePicture?(
                                    <img 
                                        src={auth.profilePicture}
                                        alt="object not found"
                                        className="profilePhoto"
                                    />
                                ):(
                                    <LetteredAvatar
                                        backgroundColor="brown"
                                        color="white"
                                        size={100}
                                        radius={50}
                                        name={auth.userdata?.user?.name}
                                />
                                )
                            }
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
                                        { 
                                            auth.uploadProfilePicsStatus === "pending" && (       
                                            <span 
                                                className="spinner-border spinner-border-sm me-1" 
                                                role="status" 
                                                aria-hidden="true">
                                            </span> 
                                            )
                                        }              
                                        Upload photo                                    
                                </label>
                                <input 
                                    type="file" 
                                    id="upload" 
                                    accept=".png, .jpg, .jpeg, .svg, .gif"
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