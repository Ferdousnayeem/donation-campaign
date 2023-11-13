import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDonation } from '../Utilities/utilities';

const DonationDetails = () => {

    const cards = useLoaderData();
    const {id} = useParams();
    const idConvertToInt = parseInt(id)
    // console.log(cards, idConvertToInt);

    const card = cards.find(card => card.id === idConvertToInt);
    // console.log(card);

    const handleDonationBtn = (idConvertToInt) => {
        // console.log(card);
        saveDonation(idConvertToInt);
    }
    
    return (
        <div>
            <div className='text-left'>
                <div className='relative'>
                    <img className='w-full rounded-lg' src={card.picture} alt="" />
                    <div className='absolute bottom-0 left-0 bg-zinc-600/50 w-full rounded-b-lg'>
                        <button onClick={()=>handleDonationBtn(idConvertToInt)} className='btn text-white px-6 py-4 my-9 ml-9 rounded border-0' style={{backgroundColor: `${card.button_background}`}}>Donate ${card.price}</button>
                    </div>
                </div>
                <div className='p-4'>
                    <h3 className='mt-14 mb-6 text-4xl font-bold'>{card.title}</h3>
                    <p className='text-base font-normal'>{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;