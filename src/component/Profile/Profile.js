import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
    const [riders, setRiders] = useContext(UserContext);
    const logOutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setRiders({})
        }).catch((err) => {
            
        });
        
    }
    return (
        <div className="mt-5 d-flex justify-content-center">
            <div className="row">
                <div style={{ borderRadius: '10px' }} className="bg-dark text-warning text-center p-3">
                    <img style={{ width: '200px', borderRadius: '50%' }} src={riders.photoUrl} alt="" />
                    <h1><small>Name: </small>{riders.name}</h1>
                    <h4>Email: {riders.email}</h4>
                    <div className="mt-5">
                        <button onClick={logOutHandler} className="btn btn-outline-danger form-control rounded-pill">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;