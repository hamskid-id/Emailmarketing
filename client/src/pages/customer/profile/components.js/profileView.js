import { BasicInfo } from "./basicinfo"
import { ChangePassword } from "./resetPassword"
import LetteredAvatar from 'react-lettered-avatar';

export const ProfileView =()=>{
    return(
        <div className="mt-5">
            <p className="fs-1 cl-blue fw-bold text-center">
                Hamzatmarketing

            </p>
            <div className="row">
                <div className="col-md-2">
                    <div className="d-flex align-items-center justify-content-center">
                         <LetteredAvatar
                            backgroundColor="brown"
                            color="white"
                            size={100}
                            radius={50}
                            name="Hamzat Avatar"
                        />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="mb-pd">
                        <p className="fs-4 fw-bold">Update your profile details</p>
                        <button
                            className="btn btn-md btn-primary"
                        >
                            Upload photo
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <BasicInfo/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <ChangePassword/>
                    </div>
                </div>
            </div>
        </div>
    )
}