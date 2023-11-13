import React from 'react';

const Card = ({card, addCard}) => {
    // console.log(card);
    const {button_background, card_background, category, category_background, id, picture, title} = card;
    
    return (
        <div>
            <div onClick={()=>addCard(id)} className='text-left cursor-pointer rounded-lg' style={{backgroundColor: `${card_background}`}}>
                <img className='w-full' src={picture} alt="" />
                <div className='p-4'>
                    <span className='px-2 py-1 mt-4 text-sm font-medium rounded' style={{backgroundColor: `${category_background}`, color: `${button_background}`}}>{category}</span>
                    <h3 className='mt-3 text-xl font-semibold' style={{color:`${button_background}`}}>{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;