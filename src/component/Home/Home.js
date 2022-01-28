import React, { useContext } from 'react';
import { UserContext } from '../../App';
import RidersDetails from './RidersDetails/RidersDetails';

const Home = () => {
    const [riders] = useContext(UserContext);
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