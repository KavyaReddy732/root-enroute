import React, { useEffect } from 'react'
import styled from 'styled-components';
import Button from '../BulletPoints/Button';
import cropimage from '../../images/cropimage.PNG';
import styles from './ForFarmer.css';


export default function ForFarmer() {
    
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfxbrqSq00WSPjId24GXOoEAWsd06qyH2Dr89Z68zMjdPw4qw/viewform?embedded=true" width="640" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        
        // <SignUpForm>
        //     <form onSubmit={lol} after>
        //         <Label> First name:
        //         </Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //         <Input
        //                 type="text"
        //                 name="FirstName"
        //                 // value={FirstName}
        //                 // onChange={handleChange}
        //                  /><br />
        //         <Label> Last name:
        //         </Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //          <Input
        //                 type="text"
        //                 name="lastName"
        //                 // value={LastName}
        //                 // onChange={handleChange}
        //                  /><br />
        //          <Label> Email:
        //         </Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //         <Input
        //                 type="text"
        //                 name="email"
        //                 // value={email}
        //                 // onChange={handleChange}
        //                  /><br />
        //         <Label> Mobile Number:</Label>
        //             <Input
        //                 type="tel"
        //                 name="mobilenumber"
        //                 // value={mobilenumber}
        //                 // onChange={handleChange}
                    
        //         /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //         <Button buttonName="SignUp" type="submit"></Button>
        //     </form>
        // </SignUpForm>
    )
}


const SignUpForm = styled.div`
background: linear-gradient(rgba(195, 240, 217,0.7), rgba(195, 240, 217,0.7)),url(${cropimage}) no-repeat center center ;
 background-size: cover;
  height: 100%;
  overflow: hidden;
@media screen and (max-width: 768px){
        heignt:100%;
        width:100%;
    }
`;
 
const Form = styled.form`
margin:auto;
padding:8rem;
width:700px;
// height:200px;
@media screen and (max-width: 768px){
        margin:0;
        padding:1rem;
        width:100%;
    }
`;
const Label = styled.label`
  font-size: 14px;
  text-align: right;
  font-weight: bold;
`;

const Input = styled.input`
  width: 50%;
  padding:10px 20px;
  margin: 10px 10px;
  box-sizing: border-box;
  display: inline-block;
  background-color: rgba(63, 58, 58, 0.075);
  @media screen and (max-width: 768px){
        margin:0;
        padding:10px;
        width:80%;
    }
`;