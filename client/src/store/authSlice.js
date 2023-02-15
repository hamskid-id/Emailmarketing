import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import jwtDecode from 'jwt-decode' 
import { toast } from 'react-toastify';
import { apiBaseUrl } from './api';

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({
        name,
        email,
        password
    }, {rejectWithValue}) =>{
    try{
        console.log(name,
            email,
            password)
        const response = await axios.post(
            `${apiBaseUrl}/registering`,{
                name,
                email,
                password
            }
        );
        localStorage.setItem(
            'marketingUserToken',
            response?.data
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

export const LogInUser = createAsyncThunk(
    'auth/LogInUser', 
    async ({
        email,
        password,
        remember
    },{rejectWithValue}) =>{
        try{
            console.log( remember,
                email,
                password)
            const response = await axios.post(
                `${apiBaseUrl}/login`,{
                    email:email,
                    password:password,
                    remember:remember
                }
            );
            localStorage.setItem(
                'marketingUserToken',
                response?.data
            )
            return response?.data
        }catch(err){
            console.log(
                err.response?.data
            )
            return rejectWithValue(
                err.response?.data
            )
        }
    }
)

export const SendPasswordResetLink = createAsyncThunk(
    'auth/SendPasswordResetLink', 
    async ({
        email,
    },{rejectWithValue}) =>{
        try{
            console.log( email)
            const response = await axios.post(
                `${apiBaseUrl}/forgetpas`,{
                    email:email
                }
            );
            return response?.data
        }catch(err){
            console.log(
                err.response?.data
            )
            return rejectWithValue(
                err.response?.data
            )
        }
    }
)

export const ResendVerify = createAsyncThunk(
    'auth/ResendVerify', 
    async ({rejectWithValue}) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/verification.resend`
            );
            return response?.data
        }catch(err){
            console.log(
                err.response?.data
            )
            return rejectWithValue(
                err.response?.data
            )
        }
    }
)

const auth_Slice = createSlice({
    name:"auth",
    initialState: {
       token : localStorage.getItem('marketingUserToken'),
        name:'',
        email:'',
        id:'',
        registerStatus:'',
        registerError:'',
       LoginStatus:'',
       SendPasswordResetLinkStatus:'',
       SendPasswordResetLinkError:'',
       ResendVerifyStatus:'',
       ResendVerifyError:'',
       LoginError:'',
       userLoaded:false,
    },
    reducers:{

        loadUser(state,action){
            const token = state.token;
            if(token){
                const {
                    name,
                    email,
                    business_id
                } = jwtDecode(token);

                return {
                    ...state,
                    token,
                    name,
                    email,
                    id:business_id,
                    userLoaded:true
                }
            }
        },

        LogOutUser(state, action){
            localStorage.removeItem('marketingUserToken');
            return {
                ...state,
                token : "",
                name:'',
                email:'',
                id:"",
                registerStatus:'',
                registerError:'',
                LoginStatus:'',
                LoginError:'',
                userLoaded:false
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(ResendVerify.pending,(state, action)=>{
            return {
                ...state,
                ResendVerifyStatus:'pending'
            }

        });
        builder.addCase(ResendVerify.fulfilled,(state, action)=>{
            if(action.payload){
                toast("verificationlink has being resent")
                return{
                    ...state,
                    ResendVerifyStatus:"success"
                }
            }else return state
        })
        builder.addCase(ResendVerify.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                ResendVerifyStatus:'rejected',
                ResendVerifyError:action.payload
            }
        })

        builder.addCase(SendPasswordResetLink.pending,(state, action)=>{
            return {
                ...state,
                SendPasswordResetLinkStatus:'pending'
            }

        });
        builder.addCase(SendPasswordResetLink.fulfilled,(state, action)=>{
            if(action.payload){
                toast("password reset link successfully sent")
                return{
                    ...state,
                    SendPasswordResetLinkStatus:"success"
                }
            }else return state
        })
        builder.addCase(SendPasswordResetLink.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                SendPasswordResetLinkStatus:'rejected',
                SendPasswordResetLinkError:action.payload
            }
        })

        builder.addCase(registerUser.pending,(state, action)=>{
            return {
                ...state,
                registerStatus:'pending'
            }

        });
        builder.addCase(registerUser.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    name,
                    email,
                    business_id
                } = jwtDecode(action.payload);
                return{
                    ...state,
                    token:action.payload,
                    name,
                    email,
                    id:business_id,
                    registerStatus:'success'
                }
            }else return state
        })
        builder.addCase(registerUser.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
                registerStatus:'rejected',
                registerError:action.payload
            }
        })

        builder.addCase(LogInUser.pending,(state, action)=>{
            return {
                ...state,
                LoginStatus:'pending'
             }
        });

        builder.addCase(LogInUser.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    name,
                    email,
                    business_id
                } = jwtDecode(action.payload);
                return{
                    ...state,
                    token:action.payload,
                    name,
                    id:business_id,
                    email,
                    LoginStatus:'success'
                }
            }else return state;

        })
        builder.addCase(LogInUser.rejected,(state, action)=>{
            toast(action.payload)
            return{
                ...state,
               LoginStatus:'rejected',
               LoginError:action.payload
            }
        })
    }
})

export const {
    loadUser,
    LogOutUser
} = auth_Slice.actions;
export default auth_Slice;