import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()

    const {singInUser,singInWithGoogle} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
//user sing in and go to website
        singInUser(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset() // from data clear
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message)
        })

    }

    const handleGoogleSingIn = () =>{
        singInWithGoogle()
        .then(result =>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error =>{
            console.log('error',error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-2 mb-4'>Don't have an account ? Please <Link to='/register' className='underline text-blue-700'>Register</Link></p>
                    <button onClick={handleGoogleSingIn} className='btn btn-ghost'> Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;