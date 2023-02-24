import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

export const GetTags = createAsyncThunk(
    'tag/GetTags ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewtags`,
             setHeaders()
        )
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)

export const CreateTags  = createAsyncThunk(
    'tag/CreateTags ', 
    async ({
        name
    },) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createtags`,{
                name
            },
            setHeaders()
        )
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)


const Tag_Slice = createSlice({
    name:"tag",
    initialState: {
        Tags:[],
        CreateTagsStatus:'',
        CreateTagsError:'',
        GetTagsStatus:'',
        GetTagsError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetTags.pending,(state, action)=>{
            return {
                ...state,
                GetTagsStatus:'pending'
            }

        });
        builder.addCase(GetTags.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    Tags:action.payload.message,
                    GetTagsStatus:"success"
                }
            }else return{
                ...state,
                GetTagsStatus:"failed"
            }
        })
        builder.addCase(GetTags.rejected,(state, action)=>{
            toast(action.payload?.message)
            return{
                ...state,
                GetTagsStatus:'rejected'
            }
        })

        builder.addCase(CreateTags.pending,(state, action)=>{
            return {
                ...state,
                CreateTagsStatus:'pending'
            }

        });
        builder.addCase(CreateTags.fulfilled,(state, action)=>{
            if(action.payload){
                toast("Tag successfully created")
                return{
                    ...state,
                    CreateTagsStatus:"success"
                }
            }else return{
                ...state,
                CreateTagsStatus:"failed"
            }
        })
        builder.addCase(CreateTags.rejected,(state, action)=>{
            return{
                ...state,
                CreateTagsStatus:'rejected'
            }
        })
    }
})


export default Tag_Slice;