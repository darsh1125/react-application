import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import {Navigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import {deepOrange, deepPurple} from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { Margin, Password } from "@mui/icons-material";
import {Formik} from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
    const [name,setName] = useState("Darsh");
    const [email,setEmail] = useState("darsh23@gmail.com");
    const [open,setOpen] = useState(false); 
    const Navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

      useEffect(()=>{

      



    //     // console.log("The new value of Name: ", name);

    //     // return ()=>{
    //     //     console.log("The old value of Name: ", name)
    //     // };
     },[]);



    const initialValues ={
        email :"",
        password :"",

    }

    
    


    

    const validationSchema=Yup.object().shape({
        "email":Yup.string().email("Please Enter Valid Email"),
        "password":Yup.string().min(10,"Password length must be 10 or greater than 10"),
      });

    const onFormSubmit = async (values,{setSubmitting}) => {

        const requestData = {
            userName:values.email,
            userPassword:values.password
       };
   
   
       const res = await axios.post("https://jsonplaceholder.typicode.com/posts", requestData);

       if (res.status === 201) {
         console.log(res.data.id);
         toast.success("API call is completted successfully", {
           position: "top-right",
           
         });
       }

        
     
       
        }
        
       
         
         
        
    
       

       /* console.log("Login:",values);
        setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
       }, 400);  
        alert("Login Successfully")
  

*/

    // const onHomePageButtonClick = () => {
    //     Navigate("/");
    //     console.log("Button clicked");
    // };
    // const handleClick = (event) => {
    //     console.log(123);
    //     setAnchorEl(event.currentTarget);
    //     setOpen(true);
    // };
    // const handleClose = (event) => {
    //     setAnchorEl(null);
    //     setOpen(false);
    // };
    return ( 
        <>
    
         <div
         style={{
         padding: 10,
         rowGap: 10,
         display: 'flex',
         flexDirection: 'column'
     }}>
         <Formik 
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onFormSubmit}
         
         >
             {({values, errors,touched, isSubmitting, handleChange,handleBlur,handleSubmit})=>{
                return(
                  <form onSubmit={handleSubmit}>
                    <div
                    style={{textAlign: 'center', fontFamily:'Helvetica', color: '#1D267D'}}>
                    <h1>Login</h1>
                    <hr style={{width:400}}/>
                    </div>
                    
                  <div style={{
                    display:"flex",
                    position:'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection:'column',
                    marginBottom:5,
                    rowGap:10
                }}> 
                <div 
                    style={{
                        display:'flex',
                        
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <TextField
                    type="email"
                    // value={email}
                    name="email"
                    label="Email"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                        width:820,  
                        margin:10,
                    }}
                    required/>
                    {errors.email && touched.email && 
                    <span style={{
                     color:'red',
                     position:'relative',
                     fontSize:15,
                     marginBottom:5
                     }}>{errors.email}</span>}
                
                    </div>
                    <TextField
                    type="text"
                    // value={email}
                    name="password"
                    label="Password"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                        width:820,
                    }}
                    required/>
                    {errors.password && touched.password && 
                    <span style={{
                     color:'red',
                     fontSize:15,
                     marginBottom:5
                     }}>{errors.password}</span>}
                <Button variant="contained" className="button" type="submit"
                style={{
                    width:150,
                    padding:10,
                    margin:10,
                    backgroundColor:'#1D267D'
                }}
                > Submit  <ToastContainer /></Button>
                </div>
                </form>
                )
             }}
        
         </Formik>
     </div>
     </>
    );
};
