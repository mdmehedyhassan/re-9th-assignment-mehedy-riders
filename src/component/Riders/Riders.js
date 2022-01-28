import React, { useEffect, useState } from 'react';
import './Riders.css'
import { useForm } from "react-hook-form";
import mapImage from '../../images/Map.png'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { fakeData } from '../../FakeData/FakeData';


const Riders = () => {
    const {riderName} = useParams();
    const [riders, setRiders] = useState([]);
    useEffect(() => {
      setRiders(fakeData)
    }, []);
    const getRider = riders.find(rider => rider.name === riderName);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [getInput, setGetInput] = useState({})

    const onSubmit = data => {
        const pickFrom = document.getElementById('pickFrom');
        const pickTo = document.getElementById('pickTo');
        const pickTime = document.getElementById('pickTime');
        if(pickFrom.value !== '' || pickTo.value !== '' || pickTime.value !== '') {
            setGetInput(data)
            displayNone();
            pickFrom.value = '';
            pickTo.value = '';
            pickTime.value = '';
        }
    };

    const reSearchHandler = () => {
        setGetInput({})
        displayNone();
    }
    const displayNone = () => {
        document.getElementById('input-form-id').classList.toggle('d-none');
        document.getElementById('result-form-id').classList.toggle('d-none');
    }
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div id="input-form-id" className="col-md-4 mt-3 mb-3">
                    <div className="rider-submit-style text-light">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="pickFrom">Pick From :</label>
                            <input id="pickFrom" placeholder="Pick From..." className="form-control" {...register("pickFrom", { required: true })} />
                            {errors.pickFrom && <span className="text-danger">This field is required!!!</span>}
                            <br />
                            <label htmlFor="pickTo">Pick To :</label>
                            <input id="pickTo" placeholder="Pick To..." className="form-control" {...register("pickTo", { required: true })} />
                            {errors.pickTo && <span className="text-danger">This field is required!!!</span>}
                            <br />
                            <label htmlFor="time">Time :</label>
                            <input id="pickTime" type="time" className="form-control" {...register("time")} />
                            <br />
                            <input className="form-control bg-primary text-light mt-3" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
                <div id="result-form-id" className="col-md-4 d-none mt-3 mb-3">
                    <div className="rider-submit-style text-light">
                        <h4><small className="text-secondary">Pick From:</small> {getInput.pickFrom}</h4>
                        <h4><small className="text-secondary">Pick To:</small> {getInput.pickTo}</h4>
                        <h4><small className="text-secondary">Time:</small> {getInput.time || 'does not set'}</h4>
                        <div className="d-flex justify-content-between align-items-center form-result-mini-div">
                            <img className="w-25" src={getRider?.imgUrl} alt="" />
                            <h4>{getRider?.name}</h4>
                            <h4><FontAwesomeIcon icon={faTicketAlt}/> {getRider?.ticket}</h4>
                            <h4>${getRider?.price}</h4>
                        </div>
                        <input onClick={reSearchHandler} className="form-control bg-primary text-light mt-3" type="submit" value="Search again" />
                    </div>
                </div>
                <div className="col-md-8">
                    <img className="w-100" src={mapImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Riders;