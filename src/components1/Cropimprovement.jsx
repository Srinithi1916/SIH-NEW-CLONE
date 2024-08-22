import React from 'react';
import './Cropim.css'; 

const Cropimprovement = () => {

  const cards = [
    { imgSrc: "https://images.pexels.com/photos/1838552/pexels-photo-1838552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Paddy", description: "" },
    { imgSrc: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Paddy", description: "" },
    { imgSrc: "https://images.pexels.com/photos/8289984/pexels-photo-8289984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Paddy", description: "" },
    { imgSrc: "https://www.agrifarming.in/wp-content/uploads/Guide-to-Finger-Millet-Cultivation-2.jpg", name: "Ragi", description: "" },
    { imgSrc: "https://images.yourstory.com/cs/7/3fb20ae02dc911e9af58c17e6cc3d915/shutterstock583213840-1616478884774.jpg?fm=png&auto=format&w=800&blur=500", name: "Ragi", description: "" },
    { imgSrc: "https://t3.ftcdn.net/jpg/03/86/14/32/240_F_386143218_aujSBaM9BEac5yLUfnOWiqzfQ3PkZN90.jpg", name: "Ragi", description: "" },
    { imgSrc: "https://sorghumgrowers.com/wp-content/uploads/2019/02/National-Sorghum-Producers-Sorghum-101-5.jpg", name: "Sorghum", description: "" },
    { imgSrc: "https://sorghumgrowers.com/wp-content/uploads/fly-images/539/National_Sorghum_Producers-Sorghum-101-Discover-More-1150x920-c.jpg", name: "Sorghum", description: "" },
    { imgSrc: "https://cdn.pixabay.com/photo/2018/08/22/22/46/field-3624849_1280.jpg", name: "Sorghum", description: "" },
    { imgSrc: "https://www.apnikheti.com/upload/crops/4073idea99822149277ef0e90f99c9550bd730200a.jpg", name: "Millet", description: "" },
    { imgSrc: "https://rukminim2.flixcart.com/image/750/900/jxdkpzk0/plant-seed/g/m/z/14000-hybrid-bajra-pearl-millet-seeds-14-kgs-seeds-green-world-original-imafhtq3umyragee.jpeg?q=20&crop=false", name: "Millet", description: "" },
    { imgSrc: "https://5.imimg.com/data5/SELLER/Default/2023/8/334421361/JO/TY/QF/3698782/pearl-millet-1000x1000.jpg", name: "Millet", description: "" },
    { imgSrc: "https://images.pexels.com/photos/5029646/pexels-photo-5029646.jpeg?cs=srgb&dl=pexels-rajesh-s-balouria-1289088-5029646.jpg&fm=jpg" ,name:"Maize", description: "" },
    { imgSrc: "https://eng.ruralvoice.in/uploads/images/2023/04/image_750x_644129fa52ff7.jpg", name: "Maize", description: "" },
    { imgSrc: "https://www.agrifarming.in/wp-content/uploads/2022/01/Maize-Yield2-1068x801.jpg", name: "Maize", description: "" },
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Drought resistant crop</h1>
     

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={card.imgSrc} alt={card.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="flip-card-back">
                <h1>{card.name}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cropimprovement;
