import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import section from '../assests/section.jpeg'
import header3 from '../assests/header3.jpg'
import shakehand from '../assests/shakehand.jpeg' 
import images from '../assests/images.jpeg'
import women from '../assests/women.jpeg'
import styles from  './Home.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  console.log("in home")
  const carouselItems = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BNgzz_uTZKteGYqjA3Ww1yhIJGPL_S4ygXkm5Bm_NA&s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BNgzz_uTZKteGYqjA3Ww1yhIJGPL_S4ygXkm5Bm_NA&s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BNgzz_uTZKteGYqjA3Ww1yhIJGPL_S4ygXkm5Bm_NA&s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
  };

  return (
<div className={styles.body}>
   <Header /><br></br><br></br><br></br><br></br><br></br>
   <div>
      {/* home */}
      <div className={styles.gridcontainer}>
        <div className={styles.leftside}>
      
          <h1 style = {{marginTop:"17px" ,fontWeight:"800"}}>F1 Gas Agency</h1><br></br>
          <h4>Reliable Gas Delivery at Your Doorstep</h4><br></br>
          <p>
            Welcome to F1 Gas Agency, your trusted partner for hassle-free gas
            delivery. We're committed to bringing you convenience, safety, and
            quality service. Explore our range of gases and place your order
            today. Experience the ease of never running out of essential gases
            again. Our dedicated team ensures prompt and punctual deliveries to
            your home or business. With a focus on safety and reliability, we
            take pride in providing top-notch gas solutions that meet your
            needs. 
          </p>
          <div className={styles.bottombutton}>
            
          </div>
        </div>
        <div className={styles.rightside}></div>
      </div>

      {/*  */}

      <div className={styles.container}>
        <div className={styles.videogrid}>
          {/* Video player component goes here */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lX6JcybgDFo"
            title="Video Player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.infogrid}>
          <Link to ='/signup' style={buttonStyle} className={styles.connectbtn}>Connect with us</Link>
          <br></br>
          <p>
            Embark on a transformative adventure and open the door to endless
            possibilities. Begin a new journey in your life by joining us, where
            innovation meets opportunity, and your aspirations take flight.
          </p>
        </div>
      </div>

      {/*  */}
      <div className={styles.corosol}>
        <div className={styles.carouselcontainer}>
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div key={index} className={styles.carouselitem}>
                <p>{item.text}</p>
                <img src={item.image} alt={`Item ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/*  */}
      <div className={styles.gridcontainerw}>
        <div className={styles.leftsidew}>
          <h1>Work With Us</h1>
          <p>
            "Join our team and become an integral part of our mission to deliver
            excellence. We are committed to providing the highest level of
            service and satisfaction to our customers, and we need passionate
            individuals like you to help us achieve that. Join us in bringing
            joy and convenience to people's lives through timely and efficient
            delivery services. Apply now and let's create a brighter future
            together!"
          </p>
          <br></br>
          <div className={styles.bottombuttonw}>
            <Link to = "/dbregister" style={buttonStyle}>Register</Link>
          </div>
        </div>
        <div className={styles.rightsidew}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPszbwtWWk0gyYz73ZE_wRc1zhEIN9gdl97db1Ld-2KA&s"
            alt=""
          />
        </div>
      </div>

      {/*  */}
      {/*  */}
      <footer className={styles.footer}>
        <div className={styles.footerdiv1}>
          <a className={styles.footericons} href="/">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a className={styles.footericons} href="/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a className={styles.footericons} href="/">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
        <div className={styles.footerdiv2}>
          <br />
          <p>Copyright ©2023 All rights reserved | Made by Our Team</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home