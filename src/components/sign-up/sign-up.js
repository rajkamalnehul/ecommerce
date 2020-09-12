 import React from 'react';
 import  './sign-up.scss';
 import {FormInput} from '../form-input/form-input.js';
 import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../firebase/firebase.utils.js';

 class SignUp extends React.Component{
     constructor(){
      super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        };
        

      }
      handleSubmit=async event =>{
        event.preventDefault();

        const{displayName,email,password,confirmpassword}=this.state;
        if(password!==confirmpassword){
            alert("password don't match");
            return;
        }

        try{
          const{user} = await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user,{displayName});
        } catch(error){
            console.error(error);
        }
        this.setState({ displayName:'',email:'', password:'',confirmpassword:''});
        };
      
        handleChange=event =>{
        const{value,name} = event.target;
        this.setState({ [name]: value});
    };

      render(){
          return(
           
            <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit= {this.handleSubmit}>

                <FormInput
                name="displayName" 
                type="text" 
                handleChange={this.handleChange} 
                value={this.state.displayName}
                label="Display Name"
                required/>
                
                <FormInput
                name="email" 
                type="email" 
                handleChange={this.handleChange} 
                value={this.state.email}
                label="Email"
                required/>

                <FormInput
                name="password" 
                type="password" 
                handleChange={this.handleChange} 
                value={this.state.password}
                label="Password"
                 required/>

                 <FormInput
                 name="confirmpassword" 
                 type="password" 
                 handleChange={this.handleChange} 
                 value={this.state.confirmpassword}
                 label="Confirm Password"
                  required/>

                  <div className='buttons'>
                    <CustomButton>Sign Up</CustomButton>
                 </div>
            </form>
            </div>
             )
      }
 }

 export default SignUp;