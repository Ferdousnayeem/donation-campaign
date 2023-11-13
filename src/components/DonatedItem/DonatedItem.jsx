import React from 'react';

const DonatedItem = ({donatedCard,handleViewDetails}) => {
    // console.log(donatedCard);
    const {button_background , card_background, category, category_background, id, picture, price, title} = donatedCard;

    return (
        <div>
            <div className='flex text-left rounded-lg' style={{backgroundColor: `${card_background}`}}>
                <img className='rounded-l-lg w-2/4' src={picture} alt="" />
                <div className='p-4'>
                    <span className='px-2 py-1 mt-4 text-sm font-medium rounded' style={{backgroundColor: `${category_background}`, color: `${button_background}`}}>{category}</span>
                    <h3 className='mt-3 text-xl font-semibold' style={{color:`${button_background}`}}>{title}</h3>
                    <p className='mt-2 mb-7' style={{color: `${button_background}`}}>${price}</p>
                    <button onClick={()=>handleViewDetails(id)}  className='px-4 py-2 text-white' style={{backgroundColor: `${button_background}`}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonatedItem;