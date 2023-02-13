import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl } from './api';

export const GetSubscribers = createAsyncThunk(
    'subscriber/GetSubscribers', 
    async ({rejectWithValue}) =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/viewsubsc`
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
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/createsubscriber`,{
                email,
                fname,
                lname,
                country,
                state,
                phone,
                dob,
                tag
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


const subscriber_Slice = createSlice({
    name:"subscriber",
    initialState: {
        subscribers:[],
        CreatesubscriberStatus:'',
        CreatesubscriberError:'',
        GetSubscribersStatus:'',
        GetSubscribersError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(GetSubscribers.pending,(state, action)=>{
            return {
                ...state,
                GetSubscribersStatus:'pending'
            }

        });
        builder.addCase(GetSubscribers.fulfilled,(state, action)=>{
            if(action.payload){
                return{
                    ...state,
                    subscribers:action.payload,
                    GetSubscribersStatus:"success"
                }
            }else return state
        })
        builder.addCase(GetSubscribers.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                GetSubscribersStatus:'rejected',
                GetSubscribersError:action.payload
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
            }else return state
        })
        builder.addCase(Createsubscriber.rejected,(state, action)=>{
            toast(action.payload);
            return{
                ...state,
                CreatesubscriberStatus:'rejected',
                CreatesubscriberError:action.payload
            }
        })
    }
})


export default subscriber_Slice;