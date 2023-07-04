import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';

export const GetBlacklist = createAsyncThunk(
    'blacklist/GetBlacklist ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewblacklisted`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        return err.response?.data
        }
    }
)

export const DeleteBlacklist  = createAsyncThunk(
    'blacklist/DeleteBlacklist', 
    async ({
        id
    },{dispatch}) =>{
    try{
        const response = await axios.delete(
            `${apiBaseUrl}/deleteblacklist/${id}`,
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(GetBlacklist())
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)

export const CreateBlacklist  = createAsyncThunk(
    'blacklist/CreateBlacklist ', 
    async ({
        email
    },{
        rejectWithValue,
        dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/blasklisted`,{
                email
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`You added "${email}" to your blacklist`
            }));
            dispatch(GetBlacklist())
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)


const blacklist_Slice = createSlice({
    name:"blacklist",
    initialState: {
        blacklist:[],
        blacklistToFilter:[],
        deleteStatus:'',
        CreateBlacklistStatus:'',
        CreateBlacklistError:'',
        GetBlacklistStatus:'',
        GetBlacklistError:''
    },
    reducers:{
        sortDataByCreatedAt(state,action){
            const newArray=[...state.blacklistToFilter]
            const sortByCreatedAt =  newArray.sort((a, b)=> (a.created_at < b.created_at ) ? -1 : (a.created_at > b.created_at) ? 1 : 0);
            return{
                ...state,
                blacklist:sortByCreatedAt
            }    
        },
        sortDataByEmail(state,action){
            const newArray=[...state.blacklistToFilter]
            const sortByEmail =  newArray.sort((a, b)=> (a.email < b.email) ? -1 : (a.email > b.email) ? 1 : 0);
            return{
                ...state,
                blacklist:sortByEmail
            }        
        },
        searchdata(state,action){
            const data=action.payload;
            const filteredData = state.blacklistToFilter.filter((item)=>item.email.toLowerCase().includes(data.toLowerCase()));
            return{
                ...state,
                blacklist:filteredData
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(DeleteBlacklist.pending,(state, action)=>{
            return {
                ...state,
                deleteStatus:'pending'
            }

        });
        builder.addCase(DeleteBlacklist.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message)
                    return{
                        ...state,
                        deleteStatus:"success"
                        }
                }else {
                    toast.error(message)
                    return{
                    ...state,
                    deleteStatus:"failed"
                    }
                }
            }else return{
                ...state,
                deleteStatus:"failed"
            }
        })
        builder.addCase(DeleteBlacklist.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                deleteStatus:'rejected'
            }
        })

        builder.addCase(GetBlacklist.pending,(state, action)=>{
            return {
                ...state,
                GetBlacklistStatus:'pending'
            }

        });
        builder.addCase(GetBlacklist.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        blacklist:message,
                        blacklistToFilter:message,
                        GetBlacklistStatus:"success"
                    }
                }return{
                    ...state,
                    GetBlacklistStatus:"success"
                }
            }else return{
                ...state,
                GetBlacklistStatus:"failed"
            }
        })
        builder.addCase(GetBlacklist.rejected,(state, action)=>{
            return{
                ...state,
                CreateBlacklistStatus:'rejected'
            }
        })

        builder.addCase(CreateBlacklist.pending,(state, action)=>{
            return {
                ...state,
                CreateBlacklistStatus:'pending'
            }

        });
        builder.addCase(CreateBlacklist.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    toast(message);
                    return{
                        ...state,
                        GetBlacklistStatus:"success"
                    }
                }else {
                    toast.error(message);
                    return{
                    ...state,
                    GetBlacklistStatus:"failed"
                    }
                }
            }
        })
        builder.addCase(CreateBlacklist.rejected,(state, action)=>{
            toast.error(action?.payload?.message);
            return{
                ...state,
                CreateBlacklistStatus:'rejected'
            }
        })
    }
})

export const blacklist_SliceActions = blacklist_Slice.actions;
export default blacklist_Slice;