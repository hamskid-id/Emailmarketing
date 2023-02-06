import { Modal } from "../../../components/modal/modal";
import { CreateTag } from "./tagsmodalcontent";
import { TagContent } from "./tagsContent"

export const TagsView =()=>{
    return(
        <div className="py-3 pdx-6">
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <span className="fs-1 fw-bold cl-blue">
                        Audience
                    </span>
                </div>
            </div>
            <div>
                <p className="fs-4">hamzatmarketting</p>
            </div>
            <div>
                <TagContent />
            </div>
            <Modal
                title="Give your tag a name"
                body={<CreateTag/>}
            />
        </div>
    )
}