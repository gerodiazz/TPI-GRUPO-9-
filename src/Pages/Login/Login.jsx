import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components';
import { login } from '../../Fetching/authFetching';


const Login = () => {
	const [errorText, setErrorText ] = useState('')
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		password: ''
	});
	const navigation = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		login(formValues).then(res => {
			if(res.message){
				setErrorText(res.message)
			}
			else{
				localStorage.setItem('role', res.role)
        		localStorage.setItem('auth-token', res.accessToken)
				navigation('/')
			}
			
		})
	};



	return (
		<main>
			<Navbar />
			<div>
				<form className='form' onSubmit={handleLogin}>
					<h1>Inicio de sesion</h1>
					<div className='form-row'>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							id='username'
							name='username'
							autoComplete='username'
							placeholder='Joe Doe'
							value={formValues.username}
							onChange={handleChange}
						/>
					</div>
					<div className='form-row'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='joedoe@mail.com'
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
					<div className='form-row'>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							id='password'
							name='password'
							autoComplete='current-password'
							placeholder='tu-contraseña'
							value={formValues.password}
							onChange={handleChange}
						/>
					</div>
					{errorText && <span className='error-text'>{errorText}</span>}
					<button className='btn-primary' type='submit'>Iniciar Sesion</button>
					<span>Aun no tienes cuenta? <Link to='/register'>Registrar</Link></span>
				</form>
			</div>
		</main>
	);
};

export default Login;