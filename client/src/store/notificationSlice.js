import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl } from './api';

export const GetNotifications = createAsyncThunk(
    'tag/GetNotifications ', 
    async ({rejectWithValue}) =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewnotifications`
        )
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data
        )
        }
    }
)


const notification_Slice = createSlice({
    name:"notification",
    initialState: {
        Notifications:[],
        GetNotificationsStatus:'',
        GetNotificationsError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetNotifications.pending,(state, action)=>{
            return {
                ...state,
                GetNotificationsStatus:'pending'
            }

        });
        builder.addCase(GetNotifications.fulfilled,(state, action)=>{
            if(action.payload){
                return{
                    ...state,
                    Notifications:action.payload,
                    GetNotificationsStatus:"success"
                }
            }else return state
        })
        builder.addCase(GetNotifications.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                GetNotificationsStatus:'rejected',
                GetNotificationsError:action.payload
            }
        })

    }
})


export default notification_Slice;