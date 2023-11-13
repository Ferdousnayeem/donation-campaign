import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredDonations } from '../Utilities/utilities';
import DonatedItem from '../DonatedItem/DonatedItem';

const Donation = () => {
    const donations = useLoaderData();

    const [donated, setDonated] = useState([]);
    const [displayDonated, setDisplayDonated] = useState(4);
    
    useEffect(() => {
        const storedDonations = getStoredDonations();
        // console.log(storedDonations);
        // console.log(donations.length);
        if (donations.length > 0) {
            const donatedItems = [];
            for (const id of storedDonations) {
                // console.log(id);
                // console.log(storedDonations);
                const donation = donations.find(donation => donation.id === id)
                // console.log(donation);
                if (donation) {
                    donatedItems.push(donation);
                }
            }
            setDonated(donatedItems);
        }
    }, [])
    // console.log(donated);

    const navigate = useNavigate();

    const handleViewDetails = id => {
        console.log(id);
        navigate(`/details/${id}`)
      }
    
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-6'>
                {donated.slice(0, displayDonated).map(donatedCard => <DonatedItem
                key={donatedCard.id}
                donatedCard={donatedCard}
                handleViewDetails={handleViewDetails}
                ></DonatedItem>)}
            </div>
            <div className={donated.length < 5 ? `hidden justify-center mt-10` : `flex justify-center mt-10`}>
                <button onClick={() => setDisplayDonated(donated.length)} className='bg-green-600 text-white px-7 py-3'>See All</button>
            </div>
        </div>
    );
};

export default Donation;