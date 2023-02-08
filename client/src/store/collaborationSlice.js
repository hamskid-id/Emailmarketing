import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl } from './api';

export const InviteUsers = createAsyncThunk(
    'collab/InviteUsers', 
    async ({
        name,
        email
    },{rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/collaborations`,{
                name,
                email
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

export const GetInviteForCollaborations = createAsyncThunk(
    'collab/collaborator', 
    async ({rejectWithValue}) =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/collaborators`)
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

export const GetInviteSent = createAsyncThunk(
    'collab/GetInviteSents', 
    async ({rejectWithValue}) =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/usersinvited`)
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


const collab_Slice = createSlice({
    name:"collab",
    initialState: {
        inviteForCollaborations:[],
        inviteSent:[],
        InviteUsersStatus:'',
        InviteUsersError:'',
        GetInviteForCollaborationsStatus:'',
        GetInviteForCollaborationsError:'',
        GetInviteSentStatus:'',
        GetInviteSentError:''
    },
    reducers:{},

    extraReducers:(builder)=>{

        builder.addCase(InviteUsers.pending,(state, action)=>{
            return {
                ...state,
                InviteUsersStatus:'pending'
            }

        });
        builder.addCase(InviteUsers.fulfilled,(state, action)=>{
            if(action.payload){
                toast('You have Successfully Invited to your account. An email has being notifying Them of your invitation!!');
                return{
                    ...state,
                    InviteUsersStatus:"success"
                }
            }else return state
        })
        builder.addCase(InviteUsers.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                InviteUsersStatus:'rejected',
                InviteUsersError:action.payload
            }
        })

        builder.addCase(GetInviteForCollaborations.pending,(state, action)=>{
            return {
                ...state,
                GetInviteForCollaborationsStatus:'pending'
            }

        });
        builder.addCase(GetInviteForCollaborations.fulfilled,(state, action)=>{
            if(action.payload){
                return{
                    ...state,
                    inviteForCollaborations:action.payload,
                    GetInviteForCollaborationsStatus:"success"
                }
            }else return state
        })
        builder.addCase(GetInviteForCollaborations.rejected,(state, action)=>{
            toast(action.payload);
            return{
                ...state,
                GetInviteForCollaborationsStatus:'rejected',
                GetInviteForCollaborationsError:action.payload
            }
        })

        builder.addCase(GetInviteSent.pending,(state, action)=>{
            return {
                ...state,
                GetInviteSentStatus:'pending'
            }

        });
        builder.addCase(GetInviteSent.fulfilled,(state, action)=>{
            if(action.payload){
                return{
                    ...state,
                    inviteSent:action.payload,
                    GetInviteSentStatus:"success"
                }
            }else return state
        })
        builder.addCase(GetInviteSent.rejected,(state, action)=>{
            toast(action.payload);
            return{
                ...state,
                GetInviteSentStatus:'rejected',
                GetInviteSentError:action.payload
            }
        })
    }
})


export default collab_Slice;