import React from 'react';
import './Cropir.css'; 

const Cropirrigation = () => {

  const cards = [
    { imgSrc: "https://www.geo.fu-berlin.de/en/v/iwrm/Implementation/technical_measures/bilder/Bilder-irrigation/Furrow-irrigation.jpg?width=1000", name: "Surface irrigation", description: "" },
    { imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20221228180719/Surface-Irrigation.jpg", name: "Surface irrigation", description: "" },
    { imgSrc: "https://images.ctfassets.net/mmptj4yas0t3/nvZFrP0j39ORdIryiSmLu/92af010d77da3cc7bff7af4b047b6485/knowledge-irrigation-surface-2018121638.jpg?w=993&h=559&q=50&fm=webp", name: "Surface irrigation", description: "" },
    { imgSrc: "https://agri-route.com/cdn/shop/articles/Micro-Irrigation-Fund.jpg?v=1687588515", name: "Micro irrigation", description: "" },
    { imgSrc: "https://images.jdmagicbox.com/quickquotes/images_main/micro-irrigation-system-for-agriculture-2217502792-drvgzyz1.jpg", name: "Micro irrigation", description: "" },
    { imgSrc: "https://www.cenmark.in/img/cenmark/blog/blog-12.jpg", name: "Micro irrigation", description: "" },
    { imgSrc: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201704/MIT-Drop-Irrigation_0.jpg?itok=3JPIxAbs", name: "Drip irrigation", description: "" },
    { imgSrc: "https://media.angi.com/s3fs-public/_Green-plant-growing-drip-system-1451047703-.jpg?impolicy=leadImage", name: "Drip irrigation", description: "" },
    { imgSrc: "https://www.microdrips.com/en/blog/wp-content/uploads/2019/05/micro-drip-watering-time.jpg", name: "Drip irrigation", description: "" },
    { imgSrc: "https://qph.cf2.quoracdn.net/main-qimg-983b518d776be5d59e86aa66e0ad0fff-lq", name: "Sprinkler irrigation", description: "" },
    { imgSrc: "https://lirp.cdn-website.com/b6780f31/dms3rep/multi/opt/stock-photo-automatic-garden-lawn-sprinkler-in-action-watering-grass-400369687-1920w.jpg", name: "Sprinkler irrigation", description: "" },
    { imgSrc: "https://dekaboru.com/wp-content/uploads/2021/04/sulama_sistemi_icin_300_milyon_tl_hibe_verdi_h118251_734ef-e1674591681401.jpg", name: "Sprinkler irrigation", description: "" },
    { imgSrc: "https://teltonika-networks.com/cdn/extras/15759/adobestock-259616720-1jpe.webp", name: "Center pivot", description: "" },
    { imgSrc: "https://cropaia.com/wp-content/uploads/Center-pivot-irrigation-980x380.jpg", name: "Center pivot", description: "" },
    { imgSrc: "https://www.researchgate.net/publication/338824831/figure/fig1/AS:960057562910766@1605906968923/Aerial-view-of-a-center-pivot-irrigation-system.jpg", name: "Center pivot", description: "" },
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Types of irrigation</h1>
     

      <div className="card-grid1">
        {cards.map((card, index) => (
          <div className="flip-card1" key={index}>
            <div className="flip-card-inner1">
              <div className="flip-card-front1">
                <img src={card.imgSrc} alt={card.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="flip-card-back1">
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

export default Cropirrigation;