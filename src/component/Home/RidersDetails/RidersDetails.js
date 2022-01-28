import React from 'react';
import './RidersDetails.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faTicketAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const RidersDetails = (props) => {
    const { capacity, imgUrl, name, price, ticket } = props.rider;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
            <div className="ridersStyle">
                <img className="w-100" src={imgUrl} alt="" />
                <div className="p-3 mt-4">
                    <h2><small>ride by: </small> {name}</h2>
                    <h5><FontAwesomeIcon icon={faUsers} /> Capacity: {capacity}</h5>
                    <h5><FontAwesomeIcon icon={faTicketAlt} /> ticket: {ticket}</h5>
                    <p><FontAwesomeIcon icon={faMoneyCheckAlt} /> Price: ${price}</p>
                    <Link to={`/rider/${name}`}>
                        <div className="d-grid">
                            <button className="btn btn-success">Riders</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RidersDetails;