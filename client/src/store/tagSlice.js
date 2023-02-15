import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl } from './api';

export const GetTags = createAsyncThunk(
    'tag/GetTags ', 
    async ({rejectWithValue}) =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewtags`
        )
        return response?.data
    } catch(err){
        console.log(
            err.response?.data
        )
        return rejectWithValue(
            err.response?.data
        )
        }
    }
)

export const CreateTags  = createAsyncThunk(
    'tag/CreateTags ', 
    async ({
        name
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createtags`,{
                name
            }
        )
        return response?.data
    } catch(err){
        console.log(
            err.response?.data
        )
        return rejectWithValue(
            err.response?.data
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
            if(action.payload){
                return{
                    ...state,
                    Tags:action.payload,
                    GetTagsStatus:"success"
                }
            }else return state
        })
        builder.addCase(GetTags.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                GetTagsStatus:'rejected',
                GetTagsError:action.payload
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
            }else return state
        })
        builder.addCase(CreateTags.rejected,(state, action)=>{
            toast(action.payload);
            return{
                ...state,
                CreateTagsStatus:'rejected',
                CreateTagsError:action.payload
            }
        })
    }
})


export default Tag_Slice;