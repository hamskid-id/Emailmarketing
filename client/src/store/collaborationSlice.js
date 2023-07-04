import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { UpdateActivities } from './activitiesSlice';
import { apiBaseUrl, setHeaders } from './api';

export const InviteUsers = createAsyncThunk(
    'collab/InviteUsers', 
    async ({
        name,
        email
    },{dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/inviteusers`,{
                name,
                email
            },
            setHeaders()
        )
        if(response?.data?.status){
            dispatch(UpdateActivities({
                action:`An invite was sent to "${email}" `
            }));
            dispatch(GetInviteSent())
        }
        return response?.data
    } catch(err){
        toast.error(
            err.response?.data?.message
        )
        }
    }
)

export const GetInviteForCollaborations = createAsyncThunk(
    'collab/GetInviteForCollaborations', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/collaborations`,
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

export const GetInviteSent = createAsyncThunk(
    'collab/GetInviteSents', 
    async () =>{
    try{
        const response = await axios.get(
            `${apiBaseUrl}/collaborators`,
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


const collab_Slice = createSlice({
    name:"collab",
    initialState: {
        inviteForCollaborations:[],
        collabToFilter:[],
        inviteSent:[],
        inviteToFilter:[],
        InviteUsersStatus:'',
        GetInviteForCollaborationsStatus:'',
        GetInviteSentStatus:'',
    },
    reducers:{
        searchdata(state,action){
            const type = action.payload.type;
            const data=action.payload.data;
            const filteredData = state.collabToFilter.filter((item)=>item.email.toLowerCase().includes(data.toLowerCase()));
            const filteredInviteData = state.inviteToFilter.filter((item)=>item.email.toLowerCase().includes(data.toLowerCase()));
            if(type ==="collab"){
                return{
                    ...state,
                    inviteForCollaborations:filteredData
                }
            }else{
                return{
                    ...state,
                    inviteSent:filteredInviteData
                }
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(InviteUsers.pending,(state, action)=>{
            return {
                ...state,
                InviteUsersStatus:'pending'
            }

        });
        builder.addCase(InviteUsers.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    message,
                    status
                }= action.payload
                if(status){
                    toast(message)
                    return {
                        ...state,
                        InviteUsersStatus:"success"
                    }
                }else{
                    toast.error(message)
                    return {
                        ...state,
                        InviteUsersStatus:"failed"
                    }
                }
            }else return {
                    ...state,
                    InviteUsersStatus:"failed"
                }
        })
        builder.addCase(InviteUsers.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                InviteUsersStatus:'rejected'
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
                const {
                    status,
                    message
                }= action.payload
                if(status === true){
                    return{
                        ...state,
                        inviteForCollaborations: message,
                        collabToFilter: message,
                        GetInviteForCollaborationsStatus:"success"
                    }
                }return{
                    ...state,
                    GetInviteForCollaborationsStatus:"success"
                }
            }else return{
                ...state,
                GetInviteForCollaborationsStatus:"failed"
            }
        })
        builder.addCase(GetInviteForCollaborations.rejected,(state, action)=>{
            return{
                ...state,
                GetInviteForCollaborationsStatus:'rejected',
            }
        })

        builder.addCase(GetInviteSent.pending,(state, action)=>{
            return {
                ...state,
                GetInviteSentStatus:'pending'
            }

        });
        builder.addCase(GetInviteSent.fulfilled,(state, action)=>{
            if(action.payload.message){
                const{
                    status,
                    message
                }=action.payload
                if(status){
                    return{
                        ...state,
                        inviteSent: message,
                        inviteToFilter: message,
                        GetInviteSentStatus:"success"
                    }
                }
            }return{
                ...state,
                GetInviteSentStatus:"success"
            }
        })
        builder.addCase(GetInviteSent.rejected,(state, action)=>{
            return{
                ...state,
                GetInviteSentStatus:'rejected',
            }
        })
    }
})

export const collab_SliceActions = collab_Slice.actions;
export default collab_Slice;