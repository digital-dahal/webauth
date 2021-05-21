import React,{useState,useEffect} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';
import './css/style.css';
import mars from '../Images/mars.png';
import lost from '../Images/lost.svg';
import wave from '../Images/wave.svg';

const SignUp=(props)=>{
	const [name,setname]=useState("");
	const [email,setEmail]=useState("");
	const [pass,setPass]=useState("")

const signup=(e)=>{
	    e.preventDefault();
	try{
		 axios.post("https://localhost:2000/auth/signUp",{
			name:name,
			email:email,
			password:pass
		}).then((response)=>{
		if(response){
		const elem=document.getElementById("register");
		elem.style.display="block";
		document.getElementById("container").style.display="none";
		document.getElementById("wave").style.display="none";
				console.log(response);

		}
		})
		.catch((err)=>{
			console.log(err);
		})

	}catch(e){
		console.log(e);
	}
}
    const goBack=()=>{
        props.history.push("/login");
    }
	return(
		<div className="main">
		<div className="container" id="container">

<div className="container__desc">
<img src={lost} alt="Ycrx-Image"/>
</div>

<div className="container__form">
<div  >
<div className="container__form__flex">
   <img src={mars} alt="Ycrx-Image"/>
 <h3 class="uk-card-title"className="container__form__text">Mars Membership Form</h3>
   </div>
     <form onSubmit={signup}>
	<input type="text"  onChange={(e)=>{setname(e.target.value)}} required   placeholder="example" autofocus="true"/>
	<input type="email" onChange={(e)=>{setEmail(e.target.value)}} required placeholder="example@gmail.com"/>
	<input type="password"  onChange={(e)=>{setPass(e.target.value)}} pattern=".{8,155}" title="8 to 12 characters" required placeholder="12345678"/>
	<div className="container__form__data">
	<button type="submit" onSubmit={signup}>Submit</button>
	<p onClick={goBack}>SignIn?</p>
	</div>
</form> 
</div>
</div>
		</div>
		<img className="wave" id='wave' src={wave}/>
 		<h1 id="register">welcome  to Mars</h1>

		</div>
		);
}
export default SignUp;
