import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './Content.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: 'https://images.unsplash.com/photo-1663473128972-a9292b9d5946?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mettur Dam', title: 'Mettur', content: 'Explore the vibrant view of Salem' },
    { src: 'https://www.seawatersports.com/img/newimage/places/vaigai-dam.png', alt: 'Vaigai Dam', title: 'Vaigai', content: 'Discover the architectural beauty of Madurai' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/31/77/d5/fb-img-15345923866264327.jpg?w=700&h=-1&s=1', alt: 'Amaravati Dam', title: 'Amaravati', content: 'Experience the hustle and bustle of Erode.' },
    { src: 'https://th-i.thgim.com/public/incoming/9pkzlw/article67407342.ece/alternates/LANDSCAPE_1200/WhatsApp%20Image%202023-10-11%20at%203.18.40%20PM.jpeg', alt: 'Krishnagiri Dam', title: 'Krishnagiri', content: 'Enjoy the vibrant arts scene in Krishnagiri.' },
    { src: 'https://i0.wp.com/pixahive.com/wp-content/uploads/2020/09/Aliyar-Dam-View-Point-83319-pixahive.jpg?fit=1560%2C1175&ssl=1', alt: 'Aliyar Dam', title: 'Aliyar', content: 'Relax on the beautiful view of pollachi.' },
    { src: 'https://images.pexels.com/photos/14594595/pexels-photo-14594595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Sathanur Dam', title: 'Sathanur', content: 'Relax on the beautiful view in Thiruvannamalai.' },
    { src: 'https://images.unsplash.com/photo-1649692337531-1f92d9f98947?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Bhavanisagar Dam', title: 'Bhavanisagar', content: 'Relax on the beautiful view  Bhavani.' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e9/93/07/manimuthar-and-papanasam.jpg?w=2000&h=-1&s=1', alt: 'Papanasam Dam', title: 'Papanasam', content: 'Relax on the nature view of Papanasam.' },
    { src: 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/Mullaperiyar_Dam_1462685981.jpg', alt: 'MullaiPeriyar Dam', title: 'Mullaiperiyar', content: 'Nature view of Mullaiperiyar.' },
    { src: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/640986b903a061001d9a0157.jpg', alt: 'Kallanai Dam', title: 'Kallanai', content: 'Heritage of our country.' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <div className="hero">
        <div className="hero-carousel">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <div className="overlay"></div>
          <div className="caption-box">
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].content}</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-card">
          <h3>300+</h3>
          <p>Dams</p>
        </div>
        <div className="stats-card">
          <h3>50</h3>
          <p>Projects</p>
        </div>
        <div className="stats-card">
          <h3>100+</h3>
          <p>Partners</p>
        </div>
      </div>

      <div className="square-container-wrapper">
      
     
        <div className="square-container-row">
         
       
          <div className="square-container">
            <img src="https://images.unsplash.com/photo-1663473128972-a9292b9d5946?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Example 1" />
            
              <center>

              <h3>Mettur Dam</h3>

              <a href="https://en.wikipedia.org/wiki/Mettur_Dam">
              <Button style={{color:"black"}}>
<b>

              Detail about
</b>
              </Button>
              </a>
              </center>
          
          </div>
          <div className="square-container">
            <img src="https://www.seawatersports.com/img/newimage/places/vaigai-dam.png" alt="Example 2" />
            <center>

              <h3>Vaigai Dam</h3>
              <a href="https://en.wikipedia.org/wiki/Vaigai_Dam">
              <Button style={{color:"black"}}>
<b>

              Detail about
</b>
              </Button>
              </a>
            </center>
         
         
          </div>
          <div className="square-container">
            <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/640986b903a061001d9a0157.jpg" alt="Example 2" />
         <center>
          <br></br>

              <h3>Mullai periyar</h3>
              <a href="https://en.wikipedia.org/wiki/Mullaperiyar_Dam">
              <Button style={{color:"black"}}>
<b>

              Detail about
</b>
              </Button>
              </a>
         </center>
         
          </div>
          <div className="square-container">
            <img src="https://i0.wp.com/pixahive.com/wp-content/uploads/2020/09/Aliyar-Dam-View-Point-83319-pixahive.jpg?fit=1560%2C1175&ssl=1" alt="Example 2" />
         
         <center>
          

              <h3>Aliyar Dam</h3>
              <a href="https://en.wikipedia.org/wiki/Aliyar_Reservoir">
              <Button style={{color:"black"}}>
<b>

              Detail about
</b>
              </Button>
              </a>
         </center>
         
          </div>
          <div className="square-container">
            <img src="https://www.trawell.in/admin/images/upload/195592249sathanur-dam.jpg" alt="Example 2"  />
         
         <center>
          <br></br>

              <h3>Sathanur</h3>
              <a href="https://en.wikipedia.org/wiki/Sathanur_Dam">
              <Button style={{color:"black"}}>
<b>

              Detail about
</b>
              </Button>
              </a>
         </center>
         
          </div>
          <div className="square-container">
            <img src="https://images.unsplash.com/photo-1649692337531-1f92d9f98947?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Example 2" />
         <center>
          <br></br>
          <br></br>

              <h3>Bhavanisagar</h3>
              <a href="https://en.wikipedia.org/wiki/Bhavanisagar">
              <Button style={{color:"black"}}>
<b>

              Detail about
</b>
              </Button>
              </a>
         </center>
         
          </div>
           <div className="carousel-controls">
          <button onClick={() => {}}>›</button>
        </div>
        
        </div>
       
      </div>

      <div className="customer-services">
        <h2>Customer Services</h2>
        <p>Details about customer services and additional features.</p>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
