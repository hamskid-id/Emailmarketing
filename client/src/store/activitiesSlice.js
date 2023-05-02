import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

export const GetActivities = createAsyncThunk(
    'activities/GetActivities ', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewactivitylog`,
                setHeaders()
        )
        return response?.data
    } catch(err){
        return err.response?.data
            
        }
    }
)

export const UpdateActivities  = createAsyncThunk(
    'activities/UpdateActivities ', 
    async ({
        action
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/addactivitylog`,{
                action
            },
            setHeaders()
        )
        return response?.data
    } catch(err){
        toast.error(err.response?.data?.message)
        }
    }
)


const activities_Slice = createSlice({
    name:"activities",
    initialState: {
        activities:[],
        UpdateActivitiesStatus:'',
        UpdateActivitiesError:'',
        GetActivitiesStatus:'',
        GetActivitiesError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetActivities.pending,(state, action)=>{
            return {
                ...state,
                GetActivitiesStatus:'pending'
            }

        });
        builder.addCase(GetActivities.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        activities:message,
                        GetActivitiesStatus:"success"
                    }
                }
                return{
                    ...state,
                    GetActivitiesStatus:"success"
                }
            }else return{
                ...state,
                GetActivitiesStatus:"failed"
            }
        })
        builder.addCase(GetActivities.rejected,(state, action)=>{
            return{
                ...state,
                GetActivitiesStatus:'rejected'
            }
        })

        builder.addCase(UpdateActivities.pending,(state, action)=>{
            return {
                ...state,
                UpdateActivitiesStatus:'pending'
            }

        });
        builder.addCase(UpdateActivities.fulfilled,(state, action)=>{
            if(action.payload){
                return{
                    ...state,
                    UpdateActivitiesStatus:"success"
                }
            }else return{
                ...state,
                UpdateActivitiesStatus:"failed"
            }
        })
        builder.addCase(UpdateActivities.rejected,(state, action)=>{
            return{
                ...state,
                UpdateActivitiesStatus:'rejected'
            }
        })
    }
})


export default activities_Slice;