import React from "react";
import "./Cropma.css";
import video from "../assests9/video.mp4";

const Cropmanagement = () => {
  const cards = [
    {
      imgSrc:
        "https://www.canolacouncil.org/wp-content/uploads/2020/08/seed-bed-prep-cover-photo-min.jpg",
      name: "Seedbed",
      description: (
        <p>
          <b>
            <br />
            <br />
            Seedbed preparation involves creating the ideal soil conditions for
            seed germination and growth.
          </b>
          <b>
            <br />
            <br />
            This includes tilling the soil to the right depth and ensuring
            proper moisture levels.
          </b>
          <b>
            <br />
            <br />A well-prepared seedbed helps in uniform seedling emergence
            and stronger crop establishment.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.vaderstad.com/globalassets/_international/assets/know-how/basic-agronomy/seedbeds/seedbed-creation/seedbed-creation-mainimage.jpg",
      name: "Seedbed",
      description: (
        <p>
          <b>
            <br />
            <br />A finely prepared seedbed ensures good seed-to-soil contact,
            which is crucial for proper germination.
          </b>
          <b>
            <br />
            <br />
            It helps in maintaining soil moisture and provides a stable
            environment for seeds.
          </b>
          <b>
            <br />
            <br />
            Effective seedbed preparation can significantly improve crop yields
            and overall farm productivity.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.plantbiologic.com/cdn/shop/articles/seed_bed_1296x.jpg?v=1683129862",
      name: "Seedbed",
      description: (
        <p>
          <b>
            <br />
            <br />
            Proper seedbed preparation is vital for minimizing soil erosion and
            optimizing water use.
          </b>
          <b>
            <br />
            <br />
            It ensures that seeds are planted at the correct depth, leading to
            uniform crop growth.
          </b>
          <b>
            <br />
            <br />
            Seedbed management includes removing weeds and creating a smooth
            surface for planting.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://extension.okstate.edu/articles/images/corn-plant-banner.jpg",
      name: "Planting",
      description: (
        <p>
          <b>
            <br />
            <br />
            Planting is the process of placing seeds or seedlings into the
            prepared seedbed.
          </b>
          <b>
            <br />
            <br />
            It is essential to plant at the right time to ensure optimal growth
            conditions.
          </b>
          <b>
            <br />
            <br />
            Proper planting techniques help in achieving uniform crop stands and
            reducing competition among plants.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2421/files/2022/12/farm.jpg",
      name: "Planting",
      description: (
        <p>
          <b>
            <br />
            <br />
            The choice of planting method depends on the crop type, soil
            conditions, and climate.
          </b>
          <b>
            <br />
            <br />
            Mechanical planters are often used for large-scale farming, ensuring
            precise seed placement.
          </b>
          <b>
            <br />
            <br />
            Successful planting sets the foundation for a healthy and productive
            crop season.
          </b>
        </p>
      ),
    },
    {
      imgSrc: "https://www.escube.eu/images/blog/salat.jpg",
      name: "Planting",
      description: (
        <p>
          <b>
            <br />
            <br />
            Planting depth and spacing are critical factors that influence crop
            growth and yield.
          </b>
          <b>
            <br />
            <br />
            Ensuring that seeds are planted at the correct depth helps protect
            them from pests and diseases.
          </b>
          <b>
            <br />
            <br />
            Planting should be done under favorable weather conditions to
            promote quick germination.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.openaccessgovernment.org/wp-content/uploads/2021/06/lawn-1068x601.jpg",
      name: "Fertilizer",
      description: (
        <p>
          <b>
            <br />
            <br />
            Fertilizers provide essential nutrients that support crop growth and
            improve soil fertility.
          </b>
          <b>
            <br />
            <br />
            The type and amount of fertilizer used depend on the soil's nutrient
            status and crop requirements.
          </b>
          <b>
            <br />
            <br />
            Proper fertilizer management helps in maximizing crop yields and
            maintaining soil health.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.niehs.nih.gov/sites/default/files/health/assets/images/pesticide.jpg",
      name: "Fertilizer",
      description: (
        <p>
          <b>
            <br />
            <br />
            Fertilizer application techniques include broadcasting, banding, and
            foliar feeding.
          </b>
          <b>
            <br />
            <br />
            Timely application of fertilizers ensures that crops receive
            nutrients during critical growth stages.
          </b>
          <b>
            <br />
            <br />
            Balanced fertilizer use is key to sustainable crop production and
            environmental protection.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://ezgrogarden.com/wp-content/uploads/2017/04/no-pestsides2.jpg",
      name: "Fertilizer",
      description: (
        <p>
          <b>
            <br />
            <br />
            Overuse of fertilizers can lead to nutrient runoff, soil
            degradation, and water pollution.
          </b>
          <b>
            <br />
            <br />
            Integrated nutrient management combines organic and inorganic
            fertilizers for sustainable farming.
          </b>
          <b>
            <br />
            <br />
            Soil testing helps determine the appropriate fertilizer type and
            amount for specific crops.
          </b>
        </p>
      ),
    },
  ];

  return (
    <div className="ma-container">
      <video className="ma-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="ma-content">
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ color: "0073cf" }}>Basics of Management</h1>
        <div className="card-grid">
          {cards.map((card, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h1>{card.name}</h1>
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cropmanagement;
