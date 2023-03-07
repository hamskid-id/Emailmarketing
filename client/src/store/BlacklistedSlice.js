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
        if(response?.data){
            dispatch(UpdateActivities({
                action:`You added "${email}" to your blacklist`
            }));
            dispatch(GetBlacklist())
        }
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)


const blacklist_Slice = createSlice({
    name:"blacklist",
    initialState: {
        blacklist:[],
        CreateBlacklistStatus:'',
        CreateBlacklistError:'',
        GetBlacklistStatus:'',
        GetBlacklistError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetBlacklist.pending,(state, action)=>{
            return {
                ...state,
                GetBlacklistStatus:'pending'
            }

        });
        builder.addCase(GetBlacklist.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        blacklist:action.payload.message,
                        GetBlacklistStatus:"success"
                    }
                }
                return{
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
                    status
                }= action.payload
                if(status === true){
                    toast(action.payload.message);
                    return{
                        ...state,
                        GetBlacklistStatus:"success"
                    }
                }
                return{
                    ...state,
                    CreateBlacklistStatus:"success"
                }
            }else return{
                ...state,
                CreateBlacklistStatus:"failed"
            }
        })
        builder.addCase(CreateBlacklist.rejected,(state, action)=>{
            return{
                ...state,
                CreateBlacklistStatus:'rejected'
            }
        })
    }
})


export default blacklist_Slice;