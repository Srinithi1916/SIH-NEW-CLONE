import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalWaterIcon from "@mui/icons-material/WaterDrop"; // Import the icon
import BuildIcon from "@mui/icons-material/Build"; // Import the icon for maintenance
import EcoIcon from "@mui/icons-material/Nature"; // Import the icon for environmental services
import "./Content.css";

const Home = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1663473128972-a9292b9d5946?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: t("metturuDam"),
      title: t("metturuDamTitle"),
      content: t("metturuDamContent"),
    },
    {
      src: "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/09/Sholayar-Dam-Valparai-74901-pixahive.jpg?fit=1560%2C1175&ssl=1",
      alt: t("sholayarDam"),
      title: t("sholayarDamTitle"),
      content: t("sholayarDamContent"),
    },
    {
      src: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/640986b903a061001d9a0157.jpg",
      alt: t("kallanaiDam"),
      title: t("kallanaiDamTitle"),
      content: t("kallanaiDamContent"),
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/4e/65/siruvani-reservoir.jpg?w=1600&h=-1&s=1",
      alt: t("siruvaniDam"),
      title: t("siruvaniDamTitle"),
      content: t("siruvaniDamContent"),
    },
    {
      src: "https://agritech.tnau.ac.in/agriculture/images/periyar.jpg",
      alt: t("mullaiPeriyarDam"),
      title: t("mullaiPeriyarDamTitle"),
      content: t("mullaiPeriyarDamContent"),
    },
    {
      src: "https://th-i.thgim.com/public/incoming/lyij7f/article65721725.ece/alternates/LANDSCAPE_1200/10216_3_8_2022_18_7_40_1_03_08_2022_VAIGAI_DAM.JPG",
      alt: t("vaigaiDam"),
      title: t("vaigaiDamTitle"),
      content: t("vaigaiDamContent"),
    },
    {
      src: "https://lh5.googleusercontent.com/p/AF1QipMZvQV9XIdHLzR9Z53FHQ7fbnJW5SzyWXZIRdHO=w810-h468-n-k-no",
      alt: t("amaravatiDam"),
      title: t("amaravatiDamTitle"),
      content: t("amaravatiDamContent"),
    },
    {
      src: "https://images.pexels.com/photos/14594595/pexels-photo-14594595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: t("sathanurDam"),
      title: t("sathanurDamTitle"),
      content: t("sathanurDamContent"),
    },
    {
      src: "https://images.unsplash.com/photo-1649692337531-1f92d9f98947?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: t("bhavanisagarDam"),
      title: t("bhavanisagarDamTitle"),
      content: t("bhavanisagarDamContent"),
    },
    {
      src: "https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-9/67970612_2593618824198719_3970824460608471040_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=8O8108UIQ08Q7kNvgGlRwRW&_nc_ht=scontent.fcjb5-1.fna&oh=00_AYDi-90Ngl0biphLvhStVYLRN2dDhXoO1sBORkESvCzaTQ&oe=66F9AA65",
      alt: t("prunchaniDam"),
      title: t("perunchaniDamTitle"),
      content: t("perunchaniDamContent"),
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e9/93/07/manimuthar-and-papanasam.jpg?w=2000&h=-1&s=1",
      alt: t("papanasamDam"),
      title: t("papanasamDamTitle"),
      content: t("papanasamDamContent"),
    },
    {
      src: "https://th-i.thgim.com/public/incoming/9pkzlw/article67407342.ece/alternates/LANDSCAPE_1200/WhatsApp%20Image%202023-10-11%20at%203.18.40%20PM.jpeg",
      alt: t("krishnagiriDam"),
      title: t("krishnagiriDamTitle"),
      content: t("krishnagiriDamContent"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
      <div className="hero">
        <div className="hero-carousel">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <div className="overlay"></div>
          <div className="caption-box">
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].content}</p>
            <button className="learn-more">{t("learnMore")}</button>
          </div>
        </div>
        <div className="carousel-controls">
          <button
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              )
            }
          >
            ⟨
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          >
            ⟩
          </button>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-card">
          <h3>300+</h3>
          <p>{t("dams")}</p>
        </div>
        <div className="stats-card">
          <h3>50</h3>
          <p>{t("projects")}</p>
        </div>
        <div className="stats-card">
          <h3>100+</h3>
          <p>{t("partners")}</p>
        </div>
      </div>

      <div className="square-container-wrapper">
        <div className="square-container-row">
          {images.slice(0, 12).map((image, index) => (
            <div key={index} className="square-container">
              <img src={image.src} alt={image.alt} />
              <div className="content">
                <h2 style={{ color: "black" }}>
                  {image.title}
                  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                  &emsp; &emsp;
                </h2>

                <center>
                  <a
                    href={`https://en.wikipedia.org/wiki/${image.title.replace(
                      /\s+/g,
                      "_"
                    )}`}
                  >
                    <Button style={{ fontSize: "17px", color: "black" }}>
                      <b>{t("detailAbout")}</b>
                      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                    </Button>
                  </a>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <section className="quote-section">
          <div className="background-container">
            <div className="dot-container">
              <span className="shape blue"></span>
              <span className="shape green"></span>
            </div>
            <div className="wrapper row">
              <div className="component-container">
                <blockquote className="blockquote blockquote--primary">
                  <p className="quote">
                    "Blue Field Techno has transformed our water management
                    operations with their advanced solutions, providing seamless
                    workload portability, rapid deployment, and superior service
                    management."
                  </p>
                  <cite>
                    <strong>
                      Ian Robinson, Chief Information Officer, Blue Field Techno
                    </strong>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://wateragri.eu/wp-content/uploads/2020/05/WATERAGRI-LOGO-1-2-1536x857.png"
              alt="WaterAgri Logo"
              className="floating-image"
            />
          </div>
          <div className="value-proposition">
            <h3>Our Value Proposition</h3>
            <div className="value-proposition-container">
              <div className="value-item">
                <img
                  src="https://www.openaccessgovernment.org/wp-content/uploads/2020/12/ogel-it-photo-1068x815.jpg"
                  alt="Innovative Solutions"
                  className="value-icon"
                />
                <h4>Innovative Solutions</h4>
                <p>
                  Our advanced technologies and methods ensure state-of-the-art
                  solutions for efficient water management.
                </p>
              </div>
              <div className="value-item">
                <img
                  src="https://learn.g2.com/hs-fs/hubfs/sustainable%20business%20practices.jpg?width=918&name=sustainable%20business%20practices.jpg"
                  alt="Sustainable Practices"
                  className="value-icon"
                />
                <h4>Sustainable Practices</h4>
                <p>
                  We focus on eco-friendly and sustainable practices to protect
                  our water resources for future generations.
                </p>
              </div>
              <div className="value-item">
                <img
                  src="https://cdn.vectorstock.com/i/2000v/96/06/marketing-thin-line-icon-concept-vector-44749606.avif"
                  alt="Comprehensive Support"
                  className="value-icon"
                />
                <h4>Comprehensive Support</h4>
                <p>
                  Our dedicated support team provides 24/7 assistance to ensure
                  seamless operations and quick resolutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Existing code for customer-services, water-services, and footer */}
      </div>

      <div className="customer-services">
        <center>
          <h2>{t("customerServices")}</h2>
          <p>{t("customerServicesDetails")}</p>
        </center>

        <div className="service-items">
          <div className="service-item">
            <AccountCircleIcon className="icon" />
            <h3>{t("yourAccount")}</h3>
            <p>{t("manageYourAccount")}</p>
          </div>
          <div className="service-item">
            <LocalPhoneIcon className="icon" />
            <h3>{t("customerSupport")}</h3>
            <p>{t("contactUsForQueries")}</p>
          </div>
          <div className="service-item">
            <HelpOutlineIcon className="icon" />
            <h3>{t("helpCenter")}</h3>
            <p>{t("getHelpWithProducts")}</p>
          </div>
        </div>
      </div>

      <div className="water-services">
        <h2>{t("waterServices")}</h2>
        <p>{t("waterServicesDescription")}</p>

        <div className="water-service-items">
          <div className="water-service-item">
            <LocalWaterIcon className="icon" />
            <h3>{t("bulkWaterSupply")}</h3>
            <p>{t("bulkWaterSupplyDescription")}</p>
          </div>
          <div className="water-service-item">
            <LocalWaterIcon className="icon" />
            <h3>{t("waterQuality")}</h3>
            <p>{t("waterQualityDescription")}</p>
          </div>
          <div className="water-service-item">
            <BuildIcon className="icon" />
            <h3>{t("damMaintenance")}</h3>
            <p>{t("damMaintenanceDescription")}</p>
          </div>
          <div className="water-service-item">
            <EcoIcon className="icon" />
            <h3>{t("environmentalServices")}</h3>
            <p>{t("environmentalServicesDescription")}</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Blue Field Techno. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
