import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './api';

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({
        name,
        email,
        password
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/registering`,{
                name,
                email,
                password
            }
        );
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
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
            const response = await axios.post(
                `${apiBaseUrl}/login`,{
                    email:email,
                    password:password,
                    remember:remember
                }
            );

            localStorage.setItem(
                'marketingUserToken',
                JSON.stringify(response?.data?.data)
            )
            return response?.data
        }catch(err){
            return rejectWithValue(
                err.response?.data?.message
            )
        }
    }
)

export const SendPasswordResetLink = createAsyncThunk(
    'auth/SendPasswordResetLink', 
    async ({
        email,
    }) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/forgetpas`,{
                    email:email
                }
            );
            return response?.data
        }catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

export const ResetPassword = createAsyncThunk(
    'auth/ResetPassword', 
    async ({
        old_password,
        password,
        confirm_pass
    }) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/changepassword`,{
                    old_password,
                    password,
                    confirm_pass
                },setHeaders()
            );
            return response?.data
        }catch(err){
            toast.error(
                err.response?.data?.message
            )
        }
    }
)

const auth_Slice = createSlice({
    name:"auth",
    initialState: {
        userdata:localStorage.getItem('marketingUserToken') ? JSON.parse(localStorage.getItem('marketingUserToken')):[],
        registerStatus:'',
        registerError:'',
       LoginStatus:'',
       SendPasswordResetLinkStatus:'',
       SendPasswordResetLinkError:'',
       ResendVerifyStatus:'',
       ResendVerifyError:'',
       ResetPasswordStatus:'',
       ResetPasswordError:'',
       LoginError:'',
       userLoaded:false,
    },
    reducers:{
        LogOutUser(state, action){
            localStorage.removeItem('marketingUserToken');
            window.location.replace("/auth/login")
            return {
                ...state,
                userdata:[],
                registerStatus:'',
                registerError:'',
                LoginStatus:'',
                LoginError:'',
                userLoaded:false
            }
        }
    },

    extraReducers:(builder)=>{

        builder.addCase(ResetPassword.pending,(state, action)=>{
            return {
                ...state,
                ResetPasswordStatus:'pending'
            }

        });
        builder.addCase(ResetPassword.fulfilled,(state, action)=>{
            if(action.payload){
                const {
                    status,
                    message
                }= action.payload
                
                if(status === true){
                    toast(message)
                    return{
                        ...state,
                        ResetPasswordStatus:"success"
                    }
                }else{
                    toast(message)
                    return{
                        ...state,
                        ResetPasswordStatus:"failed"
                    }
                }
            }else return{
                ...state,
                ResetPasswordStatus:"failed"
            }
        })
        builder.addCase(ResetPassword.rejected,(state, action)=>{
            toast(action?.payload?.message)
            return{
                ...state,
                ResetPasswordStatus:'rejected',
                ResetPasswordError:action?.payload?.message
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
                const {
                    status
                }= action.payload
                
                if(status === true){
                    toast(action.payload.message)
                    return{
                        ...state,
                        SendPasswordResetLinkStatus:"success"
                    }
                }
                toast(action.payload.message)
                return{
                    ...state,
                    SendPasswordResetLinkStatus:"success"
                }
            }else return{
                ...state,
                SendPasswordResetLinkStatus:"failed"
            }
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
                toast(action.payload);
                window.location.replace("/auth/login")
                return{
                    ...state,
                    registerStatus:'success'
                }
            }else return{
                ...state,
                registerStatus:'failed'
            }
        })
        builder.addCase(registerUser.rejected,(state, action)=>{
            toast.error("Registration Failed")
            console.log(action.payload)
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
            const{
                data
            }=action.payload;
                localStorage.setItem("tokenExpiry",data?.expires_at);
                toast("LogIn successfull");
                window.location.replace("/");
                return{
                    ...state,
                    userdata:action.payload,
                    LoginStatus:'success'
                }
            }else return{
                ...state,
                LoginStatus:'failed'
            }

        })
        builder.addCase(LogInUser.rejected,(state, action)=>{
            toast.error("Authentication Failed")
            return{
                ...state,
               LoginStatus:'rejected',
               LoginError:action.payload
            }
        })
    }
})

export const {
    LogOutUser
} = auth_Slice.actions;
export default auth_Slice;