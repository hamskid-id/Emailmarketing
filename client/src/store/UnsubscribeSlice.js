import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';

export const GetUnSubscribers = createAsyncThunk(
    'unsubscriber/GetUnSubscribers', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/unsubscribe`,
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

export const CreateUnsubscriber = createAsyncThunk(
    'unsubscriber/CreateUnsubscriber', 
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
            `${apiBaseUrl}/addunsubscrib`,{
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
                action:`You added "${email}" to your Unsubscribed list`
            }));
            dispatch(GetUnSubscribers())
        }
        return response?.data
    } catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)


const unsubscriber_Slice = createSlice({
    name:"unsubscriber",
    initialState: {
        unsubscribers:[],
        CreateUnsubscriberStatus:'',
        CreateUnsubscriberError:'',
        GetUnSubscribersStatus:'',
        GetUnSubscribersError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetUnSubscribers.pending,(state, action)=>{
            return {
                ...state,
                GetUnSubscribersStatus:'pending'
            }

        });
        builder.addCase(GetUnSubscribers.fulfilled,(state, action)=>{
            if(action.payload.message){
                return{
                    ...state,
                    unsubscribers:action.payload.message,
                    GetUnSubscribersStatus:"success"
                }
            }else return{
                ...state,
                GetUnSubscribersStatus:"failed"
            }
        })
        builder.addCase(GetUnSubscribers.rejected,(state, action)=>{
            return{
                ...state,
                CreateUnsubscriberStatus:'rejected'
            }
        })

        builder.addCase(CreateUnsubscriber.pending,(state, action)=>{
            return {
                ...state,
                CreateUnsubscriberStatus:'pending'
            }

        });
        builder.addCase(CreateUnsubscriber.fulfilled,(state, action)=>{
            if(action.payload){
                toast("Suscriber added successfully")
                return{
                    ...state,
                    CreateUnsubscriberStatus:"success"
                }
            }else return{
                ...state,
                CreateUnsubscriberStatus:"failed"
            }
        })
        builder.addCase(CreateUnsubscriber.rejected,(state, action)=>{
            return{
                ...state,
                CreateUnsubscriberStatus:'rejected'
            }
        })
    }
})


export default unsubscriber_Slice;