import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';


export const DeleteTags  = createAsyncThunk(
    'tag/DeleteTags ', 
    async ({
        id
    },{dispatch}) =>{
    try{
        const response = await axios.delete(
            `${apiBaseUrl}/deletetags/${id}`,
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(GetTags())
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)


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
        console.log(
            err.response?.data?.message
        )
        }
    }
)

export const CreateTags  = createAsyncThunk(
    'tag/CreateTags ', 
    async ({
        name
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createtags`,{
                name
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`You created a new tag "${name}" `
            }));
            dispatch(GetTags())
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)


export const UpdateTags  = createAsyncThunk(
    'tag/UpdateTags ', 
    async ({
        name,
        id
    },) =>{
    try{
        const response = await axios.put(
            `${apiBaseUrl}/updatetags/${id}`,{
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
        tagsToFilter:[],
        deleteStatus:'',
        CreateTagsStatus:'',
        CreateTagsError:'',
        UpdateTagsStatus:'',
        UpdateTagsError:'',
        GetTagsStatus:'',
        GetTagsError:''
    },
    reducers:{
        sortDataByName(state,action){
            const newArray = [...state.tagsToFilter]
            const sortByName =  newArray.sort((a, b)=> (a.name < b.name ) ? -1 : (a.name > b.name) ? 1 : 0);
            return{
                ...state,
                Tags:sortByName
            }    
        },
        sortDataByCreatedAt(state,action){
            const newArray=[...state.tagsToFilter]
            const sortByCreatedAt =  newArray.sort((a, b)=> (a.created_at < b.created_at) ? -1 : (a.created_at > b.created_at) ? 1 : 0);
            return{
                ...state,
                Tags:sortByCreatedAt
            }        
        },
        searchdata(state,action){
            const data=action.payload;
            const filteredData = state.tagsToFilter.filter((item)=>item.name.toLowerCase().includes(data.toLowerCase()));
            return{
                ...state,
                Tags:filteredData
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(DeleteTags.pending,(state, action)=>{
            return {
                ...state,
                deleteStatus:'pending'
            }

        });

        
        builder.addCase(DeleteTags.fulfilled,(state, action)=>{
            if(action.payload.status){
                toast(action.payload.message)
                return{
                    ...state,
                    deleteStatus:"success"
                }
            }else return{
                ...state,
                GetTagsStatus:"failed"
            }
        })
        builder.addCase(DeleteTags.rejected,(state, action)=>{
            return{
                ...state,
                GetTagsStatus:'rejected'
            }
        })


        builder.addCase(GetTags.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    Tags:action.payload.message,
                    tagsToFilter:action.payload.message,
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
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    return{
                        ...state,
                        CreateTagsStatus:"success"
                    }
                }else{
                    toast.error(message);
                    return{
                        ...state,
                        CreateTagsStatus:"failed"
                    }
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

        builder.addCase(UpdateTags.pending,(state, action)=>{
            return {
                ...state,
                UpdateTagsStatus:'pending'
            }

        });
        builder.addCase(UpdateTags.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    window.location.replace("/Lists/Tags")
                    return{
                        ...state,
                        UpdateTagsStatus:"success"
                    }
                }else {
                    toast.error(message)
                    return{
                        ...state,
                        UpdateTagsStatus:"failed"
                    }
                }
            }else return{
                ...state,
                UpdateTagsStatus:"failed"
            }
        })
        builder.addCase(UpdateTags.rejected,(state, action)=>{
            return{
                ...state,
                UpdateTagsStatus:'rejected'
            }
        })
    }
})

export const Tag_SliceActions = Tag_Slice.actions;
export default Tag_Slice;