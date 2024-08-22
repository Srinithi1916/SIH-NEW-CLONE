import React from 'react';
import './Cropma.css'; 

const Cropmanagement = () => {
  const cards = [
    { imgSrc: "https://www.canolacouncil.org/wp-content/uploads/2020/08/seed-bed-prep-cover-photo-min.jpg", name: "Seedbed", description: "" },
    { imgSrc: "https://www.vaderstad.com/globalassets/_international/assets/know-how/basic-agronomy/seedbeds/seedbed-creation/seedbed-creation-mainimage.jpg", name: "Seedbed", description: "" },
    { imgSrc: "https://www.plantbiologic.com/cdn/shop/articles/seed_bed_1296x.jpg?v=1683129862", name: "Seedbed", description: "" },
    { imgSrc: "https://extension.okstate.edu/articles/images/corn-plant-banner.jpg", name: "Planting", description: "" },
    { imgSrc: "https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2421/files/2022/12/farm.jpg", name: "Planting", description: "" },
    { imgSrc: "https://www.escube.eu/images/blog/salat.jpg", name: "Planting", description: "" },
    { imgSrc: "https://www.openaccessgovernment.org/wp-content/uploads/2021/06/lawn-1068x601.jpg", name: "Fertilizer", description: "" },
    { imgSrc: "https://www.niehs.nih.gov/sites/default/files/health/assets/images/pesticide.jpg", name: "Fertilizer", description: "" },
    { imgSrc: "https://ezgrogarden.com/wp-content/uploads/2017/04/no-pestsides2.jpg", name: "Fertilizer", description: "" }
  ];

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Basics of Management</h1>

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

export default Cropmanagement;
