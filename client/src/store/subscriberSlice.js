import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';

export const GetSubscribers = createAsyncThunk(
    'subscriber/GetSubscribers', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewsubscrib`,
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

export const GetTotalSubscribers = createAsyncThunk(
    'subscriber/GetTotalSubscribers', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/totalsubscriber`,
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

export const Createsubscriber = createAsyncThunk(
    'subscriber/Createsubscriber', 
    async ({
        email,
        fname,
        lname,
        country,
        state,
        phone,
        dob,
        tag
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/addsubscrib`,{
                email,
                fname,
                lname,
                country,
                state,
                phone,
                dob,
                tag
            },
            setHeaders()
        )
        if(response?.data){
            dispatch(UpdateActivities({
                action:`You added "${email}" to your subscribers list`
            }));
            dispatch(GetSubscribers())
        }
        return response?.data
    } catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)


const subscriber_Slice = createSlice({
    name:"subscriber",
    initialState: {
        subscribers:[],
        totalsub:0,
        GetTotalSubscribersStatus:'',
        GetTotalSubscribersError:'',
        CreatesubscriberStatus:'',
        CreatesubscriberError:'',
        GetSubscribersStatus:'',
        GetSubscribersError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetTotalSubscribers.pending,(state, action)=>{
            return {
                ...state,
                GetTotalSubscribersStatus:'pending'
            }

        });
        builder.addCase(GetTotalSubscribers.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    totalsub:action.payload.message,
                   GetTotalSubscribersStatus:"success"
                }
            }else return{
                ...state,
                GetTotalSubscribersStatus:"failed"
            }
        })
        builder.addCase(GetTotalSubscribers.rejected,(state, action)=>{
            return{
                ...state,
                GetTotalSubscribersStatus:'rejected'
            }
        })

        builder.addCase(GetSubscribers.pending,(state, action)=>{
            return {
                ...state,
                GetSubscribersStatus:'pending'
            }

        });
        builder.addCase(GetSubscribers.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    subscribers:action.payload.message,
                    GetSubscribersStatus:"success"
                }
            }else return{
                ...state,
                GetSubscribersStatus:"failed"
            }
        })
        builder.addCase(GetSubscribers.rejected,(state, action)=>{
            return{
                ...state,
                GetSubscribersStatus:'rejected'
            }
        })

        builder.addCase(Createsubscriber.pending,(state, action)=>{
            return {
                ...state,
                CreatesubscriberStatus:'pending'
            }

        });
        builder.addCase(Createsubscriber.fulfilled,(state, action)=>{
            if(action.payload){
                toast("Suscriber added successfully")
                return{
                    ...state,
                    CreatesubscriberStatus:"success"
                }
            }else return{
                ...state,
                CreatesubscriberStatus:"failed"
            }
        })
        builder.addCase(Createsubscriber.rejected,(state, action)=>{
            return{
                ...state,
                CreatesubscriberStatus:'rejected'
            }
        })
    }
})


export default subscriber_Slice;