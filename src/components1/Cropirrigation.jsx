import React from "react";
import "./Cropir.css";
import video from "../assests10/video.mp4";

const Cropirrigation = () => {
  const cards = [
    {
      imgSrc:
        "https://www.geo.fu-berlin.de/en/v/iwrm/Implementation/technical_measures/bilder/Bilder-irrigation/Furrow-irrigation.jpg?width=1000",
      name: "Surface irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Surface irrigation involves applying water directly to the soil
            surface.
          </b>
          <b>
            <br />
            <br />
            It is commonly used for crops in furrows or basins.
          </b>
          <b>
            <br />
            <br />
            This method can be efficient in areas with moderate water
            availability.
          </b>
          <b>
            <br />
            <br />
            However, it may lead to water loss through evaporation and runoff.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20221228180719/Surface-Irrigation.jpg",
      name: "Surface irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Surface irrigation is one of the oldest irrigation techniques.
          </b>
          <b>
            <br />
            <br />
            It utilizes gravity to distribute water over fields.
          </b>
          <b>
            <br />
            <br />
            The effectiveness of this method depends on the field's slope and
            soil type.
          </b>
          <b>
            <br />
            <br />
            Proper management can reduce water wastage and improve crop yields.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://images.ctfassets.net/mmptj4yas0t3/nvZFrP0j39ORdIryiSmLu/92af010d77da3cc7bff7af4b047b6485/knowledge-irrigation-surface-2018121638.jpg?w=993&h=559&q=50&fm=webp",
      name: "Surface irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Surface irrigation can be categorized into different types such as
            furrow, basin, and border irrigation.
          </b>
          <b>
            <br />
            <br />
            Each type has its own advantages based on the crop and field
            conditions.
          </b>
          <b>
            <br />
            <br />
            Proper design and maintenance are crucial for optimizing water use.
          </b>
          <b>
            <br />
            <br />
            Effective surface irrigation can help conserve water and improve
            agricultural productivity.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://agri-route.com/cdn/shop/articles/Micro-Irrigation-Fund.jpg?v=1687588515",
      name: "Micro irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Micro irrigation systems deliver water directly to the plant root
            zone.
          </b>
          <b>
            <br />
            <br />
            This method includes drip and sprinkler systems designed to reduce
            water wastage.
          </b>
          <b>
            <br />
            <br />
            Micro irrigation is highly efficient and can be used in various soil
            and crop conditions.
          </b>
          <b>
            <br />
            <br />
            It helps in maintaining optimal moisture levels and improves crop
            yield.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://images.jdmagicbox.com/quickquotes/images_main/micro-irrigation-system-for-agriculture-2217502792-drvgzyz1.jpg",
      name: "Micro irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Micro irrigation systems are ideal for areas with limited water
            resources.
          </b>
          <b>
            <br />
            <br />
            They provide precise water application, minimizing evaporation and
            runoff.
          </b>
          <b>
            <br />
            <br />
            Drip irrigation is a common form of micro irrigation that directly
            waters the plants.
          </b>
          <b>
            <br />
            <br />
            This method is beneficial for high-value crops and greenhouses.
          </b>
        </p>
      ),
    },
    {
      imgSrc: "https://www.cenmark.in/img/cenmark/blog/blog-12.jpg",
      name: "Micro irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Micro irrigation systems are customizable based on crop type and
            field conditions.
          </b>
          <b>
            <br />
            <br />
            They can be automated to deliver water at scheduled times.
          </b>
          <b>
            <br />
            <br />
            Efficient water use leads to reduced labor and lower water costs.
          </b>
          <b>
            <br />
            <br />
            Micro irrigation contributes to sustainable agricultural practices.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201704/MIT-Drop-Irrigation_0.jpg?itok=3JPIxAbs",
      name: "Drip irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Drip irrigation delivers water directly to the plant roots through a
            network of tubes and emitters.
          </b>
          <b>
            <br />
            <br />
            This system minimizes water wastage by avoiding surface evaporation
            and runoff.
          </b>
          <b>
            <br />
            <br />
            Drip irrigation is suitable for various crops and soil types.
          </b>
          <b>
            <br />
            <br />
            It improves water efficiency and can enhance crop yields.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://media.angi.com/s3fs-public/_Green-plant-growing-drip-system-1451047703-.jpg?impolicy=leadImage",
      name: "Drip irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Drip irrigation systems are adaptable and can be used in both small
            and large-scale farms.
          </b>
          <b>
            <br />
            <br />
            They help in precise water management and can be integrated with
            fertigation systems.
          </b>
          <b>
            <br />
            <br />
            The method reduces weed growth and improves soil aeration.
          </b>
          <b>
            <br />
            <br />
            It is especially beneficial in arid and semi-arid regions.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.microdrips.com/en/blog/wp-content/uploads/2019/05/micro-drip-watering-time.jpg",
      name: "Drip irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Drip irrigation systems offer flexibility in water delivery,
            allowing adjustments based on crop needs.
          </b>
          <b>
            <br />
            <br />
            They can be equipped with timers and sensors to automate watering
            schedules.
          </b>
          <b>
            <br />
            <br />
            Regular maintenance is necessary to prevent clogging and ensure
            system efficiency.
          </b>
          <b>
            <br />
            <br />
            Drip irrigation is a cost-effective solution for efficient water
            use.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-983b518d776be5d59e86aa66e0ad0fff-lq",
      name: "Sprinkler irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Sprinkler irrigation simulates natural rainfall by distributing
            water through overhead pipes.
          </b>
          <b>
            <br />
            <br />
            It is suitable for a wide range of crops and field sizes.
          </b>
          <b>
            <br />
            <br />
            The system can be fixed or portable, and it allows for efficient
            water application.
          </b>
          <b>
            <br />
            <br />
            Sprinkler irrigation can be affected by wind and evaporation losses.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://lirp.cdn-website.com/b6780f31/dms3rep/multi/opt/stock-photo-automatic-garden-lawn-sprinkler-in-action-watering-grass-400369687-1920w.jpg",
      name: "Sprinkler irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Sprinkler systems can be customized to deliver varying amounts of
            water based on crop requirements.
          </b>
          <b>
            <br />
            <br />
            The method is effective for irrigating large areas and can be used
            in diverse climates.
          </b>
          <b>
            <br />
            <br />
            Regular maintenance and calibration are essential for optimal
            performance.
          </b>
          <b>
            <br />
            <br />
            Sprinkler irrigation improves water distribution and can enhance
            crop growth.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://dekaboru.com/wp-content/uploads/2021/04/sulama_sistemi_icin_300_milyon_tl_hibe_verdi_h118251_734ef-e1674591681401.jpg",
      name: "Sprinkler irrigation",
      description: (
        <p>
          <b>
            <br />
            <br />
            Sprinkler irrigation systems can be designed for different crop
            types and field shapes.
          </b>
          <b>
            <br />
            <br />
            They can be operated manually or automated for convenience.
          </b>
          <b>
            <br />
            <br />
            The method provides uniform water distribution and can reduce labor
            costs.
          </b>
          <b>
            <br />
            <br />
            Sprinkler irrigation is ideal for both small and large-scale farming
            operations.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://teltonika-networks.com/cdn/extras/15759/adobestock-259616720-1jpe.webp",
      name: "Center pivot",
      description: (
        <p>
          <b>
            <br />
            <br />
            Center pivot irrigation systems rotate around a central pivot point
            to distribute water.
          </b>
          <b>
            <br />
            <br />
            This method is effective for large fields and provides uniform
            coverage.
          </b>
          <b>
            <br />
            <br />
            Center pivot systems can be equipped with sensors and controllers
            for precision.
          </b>
          <b>
            <br />
            <br />
            They are suitable for various crops and can improve water
            efficiency.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://cropaia.com/wp-content/uploads/Center-pivot-irrigation-980x380.jpg",
      name: "Center pivot",
      description: (
        <p>
          <b>
            <br />
            <br />
            Center pivot irrigation systems are commonly used in large-scale
            agriculture.
          </b>
          <b>
            <br />
            <br />
            They can be designed to cover circular or rectangular fields.
          </b>
          <b>
            <br />
            <br />
            The system allows for efficient water application and can be
            integrated with fertigation.
          </b>
          <b>
            <br />
            <br />
            Center pivot systems are ideal for crops like corn and wheat.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.researchgate.net/publication/338824831/figure/fig1/AS:960057562910766@1605906968923/Aerial-view-of-a-center-pivot-irrigation-system.jpg",
      name: "Center pivot",
      description: (
        <p>
          <b>
            <br />
            <br />
            Center pivot irrigation provides consistent water distribution
            across the field.
          </b>
          <b>
            <br />
            <br />
            The system can be adjusted to meet varying crop water needs
            throughout the growing season.
          </b>
          <b>
            <br />
            <br />
            Center pivots can be operated remotely and are equipped with
            advanced technology.
          </b>
          <b>
            <br />
            <br />
            They are a cost-effective solution for efficient water use in large
            agricultural operations.
          </b>
        </p>
      ),
    },
  ];

  return (
    <div className="ir-container">
      <video className="ir-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="ir-content">
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ color: "white" }}>Types of irrigation</h1>
        <div className="card-grid1">
          {cards.map((card, index) => (
            <div className="flip-card1" key={index}>
              <div className="flip-card-inner1">
                <div className="flip-card-front1">
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flip-card-back1">
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

export default Cropirrigation;
