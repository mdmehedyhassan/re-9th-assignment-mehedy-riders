import React, { useContext, useState } from 'react';
import './Login.css'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';


initializeApp(firebaseConfig);
const Login = () => {
    const [riders, setRiders] = useContext(UserContext);
    const [isHaveAccount, setIsHaveAccount] = useState(true);

    const auth = getAuth();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (!isHaveAccount && data.name && data.email && data.password && data.confirmPassword) {
            if (data.password === data.confirmPassword) {
                createUserWithEmailAndPassword(auth, data.email, data.password)
                    .then((res) => {
                        updateProfileHandler(data.name)
                        const getData = {
                            email: data.email,
                            name:  data.name
                        }
                        setRiders(getData);
                        
                        history.replace(from);
                        console.log(res, getData);
                    })
                    .catch((err) => {
                    });
            }
            else{
                alert('Password does not Match')
            }
        }
        if (isHaveAccount && data.email && data.password) {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((res) => {
                    const getData = {
                        email: res.user.email,
                        name: res.user.displayName
                    }
                    setRiders(getData);
                    history.replace(from);
                    console.log(res)
                })
                .catch((err) => {

                });
        }
    };

    const updateProfileHandler = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((err) => {
        });
    }

    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                const getData = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photoUrl: res.user.photoURL
                }
                setRiders(getData);
                history.replace(from);
            }).catch((err) => {
                setRiders({ error: 'Something is wrong please try again' })
            });
    }


    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center">
                <div style={{ background: 'black' }} className="col-lg-5 col-md-7 col-sm-9 col-11text-center p-3 rounded-3">
                    <div className="border border-2 border-warning p-3 rounded-3">
                        <form className="text-danger" onSubmit={handleSubmit(onSubmit)}>
                            {
                                isHaveAccount || <input type="text" className="form-control" placeholder="Name" {...register("name")} />
                            }
                            <br />
                            <input type="text" className="form-control" placeholder="Username or Email" {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                            <br />
                            <input type="password" className="form-control" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                            <br />
                            {
                                isHaveAccount || <input type="password" className="form-control" placeholder="Confirm Password" {...register("confirmPassword")} />
                            }
                            <br />
                            <input className="form-control bg-warning text-danger rounded-pill" type="submit" value={isHaveAccount ? 'Login' : 'Create an account'} />
                            <div className="mt-3 text-center text-light">
                                {
                                    isHaveAccount ? <p>Don't have an account? <span onClick={() => setIsHaveAccount(!isHaveAccount)} className="loginCreate-style">Create an account</span></p> :
                                        <p>Already have an account? <span onClick={() => setIsHaveAccount(!isHaveAccount)} className="loginCreate-style">Login</span></p>
                                }
                            </div>
                        </form>
                    </div>
                    <h3 className="text-center text-warning mt-3">Or</h3>
                    <div className="mt-3">
                        <button onClick={googleSingIn} className="form-control btn btn-outline-info rounded-pill"><FontAwesomeIcon icon={faGooglePlus} /> Google Sign in</button>
                    </div>
                    {
                        riders.error && <h3 className="text-danger">{riders.error}</h3>
                    }

                </div>
            </div>
        </div>
    );
};

export default Login;