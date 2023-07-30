import { useEffect, useState,useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { CustomFormField } from "../../../../../components/customFomField";
import * as XLSX from "xlsx";
import { Createsubscriber } from "../../../../../store/subscriberSlice";

export const UploadSubcriberCSV =({hidemodal})=>{
    const subsriber = useSelector(
        state => state.subscriber
    )
    const uploadRef = useRef(null)
    const Tags = useSelector(
        state => state.tag
    )
    const [items, setItems] = useState([]);
    const [tagToSubmit, setTagToSubmit] = useState('');
    const dispatch = useDispatch();
    const { 
        handleSubmit, 
        register,
        formState: { errors } 
    } = useForm();

    const SubmitHandler=({
        tag
    })=>{
        setTagToSubmit(tag)
        uploadRef.current.click();
    }

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
    
          fileReader.onload = (e) => {
            const bufferArray = e.target.result;

            const wb = XLSX.read(bufferArray, { type: "buffer" });
    
            const wsname = wb.SheetNames[0];
    
            const ws = wb.Sheets[wsname];
    
            const data = XLSX.utils.sheet_to_json(ws);
    
            resolve(data);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    
        promise.then((d) => {
          setItems(d);
        });
    };

    console.log(tagToSubmit,items)

    useEffect(()=>{
        if(subsriber.CreatesubscriberStatus ==="success"){
            hidemodal.current.click()
        }
    },[subsriber.CreatesubscriberStatus])

    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <div className="w-100 mb-2">
                {
                    Tags && Tags.Tags?.length ==0?(
                        <CustomFormField
                            label ="Name"
                            name ="tag"
                            placeholder="name"
                            type="text"
                            register={register}
                            errors={errors.tag}
                        />
                    ):(
                        <div>
                            <label
                                className="fw-bold fs-6" 
                                htmlFor="tag">
                                Tags
                            </label>
                            <select 
                                name="tag" 
                                id=""
                                className=" p-2 border rounded w-100 fs-6"
                                {...register(
                                    "tag", 
                                    {
                                        required:`tag field is invalid`,
                                    }
                                )
                                }
                                >
                                {
                                    Tags.Tags?.map((tag,index)=>{
                                        const{
                                            name,
                                            id
                                        }=tag
                                        return(
                                            <option 
                                                value={id}
                                                key={index}
                                            >{name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                )
                }
            </div>
            {/* <CustomFormField
                value="submit"
                type="btn"
                loadingStatus={subsriber.CreatesubscriberStatus}
            /> */}
            <label 
                htmlFor="upload"
                ref={uploadRef}
            >
            </label>
            <input
                type="file"
                id="upload"
                className="btn b-grey btn-md my-2 fl-r mb-2 me-2"
                onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
                }}
            />
            <button
                htmlFor="upload"
                className="btn b-grey btn-md my-2 fl-r mb-2 me-2"
                >         
                    Proceed                                   
            </button>
        </form>
    )
}