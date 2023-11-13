import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
// import { toast } from "react-toastify";

const Home = () => {

  const [cards, setCards] = useState([]);
  // const [displayCards, setDisplayCards] = useState([]);

  useEffect(()=> {
    fetch('/public/data.json')
    .then(res => res.json())
    .then(data => setCards(data));
  })

  const navigate = useNavigate();

  const addCard = id => {
    // console.log(id);
    navigate(`/details/${id}`)
  }
  

  return (
    <div>
      {/* header area starts */}
      <div
        className="hero min-h-[80vh] mb-3"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/D997vXp/banner-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-zinc-100/80 pb-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="my-20 text-[#0B0B0B] text-5xl font-bold">I Grow By Helping People In Need</h1>
            <input className="p-3 w-80 rounded-l-lg text-black" type="text" name="textInput" id="textInput" placeholder="Search Here"/>
            <button className="btn btn-primary rounded-l-none p-3">Search</button>
          </div>
        </div>
      </div>
      {/* header area ends */}

      {/* cards container strats */}
      <div className="grid md:grid-cols-4 gap-6">
      {
        cards.map((card, idx)=> <Card
        key={idx}
        card={card}
        addCard={addCard}
        ></Card>)
      }
      </div>
      {/* cards container ends */}
    </div>
  );
};

export default Home;




