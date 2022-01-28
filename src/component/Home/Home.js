import React, { useEffect, useState } from 'react';
import { fakeData } from '../../FakeData/FakeData';
import RidersDetails from './RidersDetails/RidersDetails';

const Home = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() => {
      setRiders(fakeData)
    }, []);
    return (
        <div className="container">
            <div className="row">
                {
                    riders.map(rider => <RidersDetails key={rider.id} rider={rider}> </RidersDetails>)
                }
            </div>
        </div>
    );
};

export default Home;