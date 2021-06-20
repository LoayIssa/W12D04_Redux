import React, { useState  } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setToken } from '../reducer/login';

const Login = () => {

	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [messageerr, setmessageerr] = useState('');
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
		  token: state.token.token
		};
	  });

	  const cheakLogin =()=>{
		axios.post(`http://localhost:5000/login` ,{email, password})
		.then((result)=>{
			console.log("result",result.status)
		  if(!result.data.errors){
			console.log("result1",result.data.errors)
			dispatch(setToken(result.data.token));
            history.push("/dashboard");
		  }
		}).catch((error)=>{
			setmessageerr(error.response.data);
		})
	
	  }
	

	return (
		<>
		<div className="parint">
			<div className="input" >
				<input
					type="email"
					placeholder="email here"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password here"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={cheakLogin}>Login</button>
			</div>
			<div>{messageerr ? <p className="errCreated">{messageerr}</p> : ""}</div>

			</div>

		
		</>
	);
};

export default Login;
