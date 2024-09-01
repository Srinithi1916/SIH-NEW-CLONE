import React from "react";
import video from "../assests11/video.mp4";

import "./Cropim.css";

const Cropimprovement = () => {
  const cards = [
    {
      imgSrc:
        "https://images.pexels.com/photos/1838552/pexels-photo-1838552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Paddy",
      description: (
        <p>
          <b>
            <br />
            <br />
            Paddy, though traditionally grown in wet conditions, has evolved
            with drought-resistant varieties.
          </b>
          <b>
            <br />
            <br />
            These varieties are capable of withstanding prolonged dry periods.
          </b>
          <b>
            <br />
            <br />
            This makes them an essential crop in regions facing water scarcity.
          </b>
          <b>
            <br />
            <br />
            Adaptation strategies include deeper root systems and more efficient
            water usage.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Paddy",
      description: (
        <p>
          <b>
            <br />
            <br />
            Drought-tolerant paddy is a breakthrough in agricultural technology.
          </b>
          <b>
            <br />
            <br />
            It ensures food security in regions prone to dry spells.
          </b>
          <b>
            <br />
            <br />
            By reducing water dependency, these varieties sustain productivity.
          </b>
          <b>
            <br />
            <br />
            They are engineered to use water more efficiently.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/8289984/pexels-photo-8289984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Paddy",
      description: (
        <p>
          <b>
            <br />
            <br />
            Innovative paddy breeding has led to varieties that endure dry
            conditions.
          </b>
          <b>
            <br />
            <br />
            These crops are specifically designed for low-water environments.
          </b>
          <b>
            <br />
            <br />
            Their resilience is critical for agriculture in arid zones.
          </b>
          <b>
            <br />
            <br />
            Farmers can now cultivate paddy with less reliance on irrigation.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.agrifarming.in/wp-content/uploads/Guide-to-Finger-Millet-Cultivation-2.jpg",
      name: "Ragi",
      description: (
        <p>
          <b>
            <br />
            <br />
            Ragi, or finger millet, is renowned for its drought resistance.
          </b>
          <b>
            <br />
            <br />
            This crop thrives in dry and semi-arid regions.
          </b>
          <b>
            <br />
            <br />
            It requires minimal water, making it an ideal choice for farmers.
          </b>
          <b>
            <br />
            <br />
            Ragi's deep roots allow it to access water from deeper soil layers.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://images.yourstory.com/cs/7/3fb20ae02dc911e9af58c17e6cc3d915/shutterstock583213840-1616478884774.jpg?fm=png&auto=format&w=800&blur=500",
      name: "Ragi",
      description: (
        <p>
          <b>
            <br />
            <br />
            Ragi is a highly nutritious cereal crop that withstands drought.
          </b>
          <b>
            <br />
            <br />
            It is an excellent source of calcium and iron.
          </b>
          <b>
            <br />
            <br />
            The crop's adaptability to dry climates makes it vital for dryland
            agriculture.
          </b>
          <b>
            <br />
            <br />
            Ragi cultivation requires less water compared to other crops.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://t3.ftcdn.net/jpg/03/86/14/32/240_F_386143218_aujSBaM9BEac5yLUfnOWiqzfQ3PkZN90.jpg",
      name: "Ragi",
      description: (
        <p>
          <b>
            <br />
            <br />
            Finger millet, also known as Ragi, is a drought-resistant cereal.
          </b>
          <b>
            <br />
            <br />
            It is well-suited for cultivation in areas with limited water
            availability.
          </b>
          <b>
            <br />
            <br />
            Ragi's ability to grow in harsh conditions makes it a crucial crop.
          </b>
          <b>
            <br />
            <br />
            Farmers favor it for its low water requirements and high yield.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://sorghumgrowers.com/wp-content/uploads/2019/02/National-Sorghum-Producers-Sorghum-101-5.jpg",
      name: "Sorghum",
      description: (
        <p>
          <b>
            <br />
            <br />
            Sorghum is a drought-resistant crop essential for arid regions.
          </b>
          <b>
            <br />
            <br />
            Its resilience to low water conditions makes it a valuable food
            source.
          </b>
          <b>
            <br />
            <br />
            Sorghum is used for food, fodder, and biofuel production.
          </b>
          <b>
            <br />
            <br />
            The crop's versatility supports both subsistence and commercial
            agriculture.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://sorghumgrowers.com/wp-content/uploads/fly-images/539/National_Sorghum_Producers-Sorghum-101-Discover-More-1150x920-c.jpg",
      name: "Sorghum",
      description: (
        <p>
          <b>
            <br />
            <br />
            Sorghum thrives in areas with limited water resources.
          </b>
          <b>
            <br />
            <br />
            It is a key crop for regions facing prolonged drought.
          </b>
          <b>
            <br />
            <br />
            The plant’s deep roots allow it to access water from deeper soil
            layers.
          </b>
          <b>
            <br />
            <br />
            Its adaptability ensures consistent yields even in challenging
            conditions.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2018/08/22/22/46/field-3624849_1280.jpg",
      name: "Sorghum",
      description: (
        <p>
          <b>
            <br />
            <br />
            Sorghum is highly valued for its drought tolerance and adaptability.
          </b>
          <b>
            <br />
            <br />
            This crop is suited for cultivation in arid and semi-arid regions.
          </b>
          <b>
            <br />
            <br />
            Sorghum’s resistance to water scarcity ensures stable crop
            production.
          </b>
          <b>
            <br />
            <br />
            Its versatility extends to food, animal feed, and industrial uses.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.apnikheti.com/upload/crops/4073idea99822149277ef0e90f99c9550bd730200a.jpg",
      name: "Millet",
      description: (
        <p>
          <b>
            <br />
            <br />
            Millet is a drought-tolerant grain with significant agricultural
            importance.
          </b>
          <b>
            <br />
            <br />
            Its resilience to dry conditions makes it a staple in arid regions.
          </b>
          <b>
            <br />
            <br />
            Millet is rich in nutrients, including iron and calcium.
          </b>
          <b>
            <br />
            <br />
            Its short growing period and low water needs benefit farmers.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://rukminim2.flixcart.com/image/750/900/jxdkpzk0/plant-seed/g/m/z/14000-hybrid-bajra-pearl-millet-seeds-14-kgs-seeds-green-world-original-imafhtq3umyragee.jpeg?q=20&crop=false",
      name: "Millet",
      description: (
        <p>
          <b>
            <br />
            <br />
            Pearl millet, a variety of millet, is well-suited for dry climates.
          </b>
          <b>
            <br />
            <br />
            Its tolerance to drought and heat makes it a valuable crop.
          </b>
          <b>
            <br />
            <br />
            Pearl millet’s hardy nature supports stable yields in challenging
            conditions.
          </b>
          <b>
            <br />
            <br />
            The crop is an essential component of dryland agriculture.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/334421361/JO/TY/QF/3698782/pearl-millet-1000x1000.jpg",
      name: "Millet",
      description: (
        <p>
          <br />
          <b>
            <br />
            <br />
            Millet is a crucial crop for regions experiencing water shortages.
          </b>
          <b>
            <br />
            <br />
            Its ability to thrive with minimal water makes it highly valuable.
          </b>
          <b>
            <br />
            <br />
            Millet’s adaptability to harsh conditions ensures reliable crop
            production.
          </b>
          <b>
            <br />
            <br />
            The crop supports both subsistence and commercial farming.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/5029646/pexels-photo-5029646.jpeg?cs=srgb&dl=pexels-rajesh-s-balouria-1289088-5029646.jpg&fm=jpg",
      name: "Maize",
      description: (
        <p>
          <br />
          <b>
            <br />
            <br />
            Maize, or corn, is a versatile crop with improved drought
            resistance.
          </b>
          <b>
            <br />
            <br />
            Recent advancements have enhanced its ability to withstand dry
            conditions.
          </b>
          <b>
            <br />
            <br />
            Drought-tolerant maize varieties are crucial for stable food
            production.
          </b>
          <b>
            <br />
            <br />
            They contribute to food security and agricultural sustainability.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://eng.ruralvoice.in/uploads/images/2023/04/image_750x_644129fa52ff7.jpg",
      name: "Maize",
      description: (
        <p>
          <br />
          <b>
            <br />
            <br />
            Maize is a vital crop with varieties adapted to dry conditions.
          </b>
          <b>
            <br />
            <br />
            It plays a key role in food production in arid and semi-arid
            regions.
          </b>
          <b>
            <br />
            <br />
            Drought-resistant maize ensures stability in crop yields.
          </b>
          <b>
            <br />
            <br />
            Its cultivation supports both subsistence and commercial
            agriculture.
          </b>
        </p>
      ),
    },
    {
      imgSrc:
        "https://www.agrifarming.in/wp-content/uploads/2022/01/Maize-Yield2-1068x801.jpg",
      name: "Maize",
      description: (
        <p>
          <br />
          <b>
            <br />
            <br />
            Maize, with its drought-tolerant varieties, is essential for dryland
            farming.
          </b>
          <b>
            <br />
            <br />
            Its ability to produce stable yields under water scarcity conditions
            is critical.
          </b>
          <b>
            <br />
            <br />
            Recent advancements have improved its drought resistance and yield
            stability.
          </b>
          <b>
            <br />
            <br />
            Maize’s versatility makes it a key crop in many agricultural
            systems.
          </b>
        </p>
      ),
    },
  ];

  return (
    <div className="im-container">
      <video className="im-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="im-content"></div>

      <br />
      <br />
      <br />
      <br />
      <h1 style={{ color: "white" }}>Drought resistant crop</h1>
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
  );
};

export default Cropimprovement;
