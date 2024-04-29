import React from 'react'
import UserHeader from '../component/UserHeader'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom';
import image from "../assests/img1.jpg"
// import './userhome.css'
import styles from './userhome.module.css'
const Userhome = () => {
  const data = useSelector((state)=>state.userSliceReducer)

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
    <div>
    <UserHeader /><br></br><br></br><br></br><br></br>
    <div>
      <div className={styles.gridcontainer}>
        <div className={styles.leftside}>
          <h2>Book your Cylinder</h2><br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            
          </p>
          <div className={styles.bottombutton}>
            <Link to='/booking' style={buttonStyle}>Click me</Link>
          </div>
        </div>
        <div className={styles.rightside}>
        <img
              className="img-fluid"
              src={image}
              alt="Complaint Image"
            />
        </div>
      </div>
      <div className={styles.deliveryworks}>
        <h2>How Delivery Works</h2>
        <div className={styles.gridcontainer2}>
          {/* Grid 1 */}
          <div className={styles.griditem}>
            <h3>Step 1</h3>
            <br></br>
            <p>
              First You need make new connection, You need to submit required
              files for applying for connection
            </p>
          </div>

          {/* Grid 2 */}
          <div className={styles.griditem}>
            <h3>Step 2</h3>
            <br></br>
            <p>
              After your connection is approved You can place your new order
              selecting your specific address and time of your order.
            </p>
          </div>

          {/* Grid 3 */}
          <div className={styles.griditem}>
            <h3>Step 3</h3>
            <br></br>
            <p>
              Delivery boy of your Area will deliver your order to your address
            </p>
          </div>
        </div>
      </div>

      <div className={styles.complaintcontainer}>
        <div className={styles.complaintcontent}>
          <div className={styles.imagecontainer}>
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/687207094/photo/complaints-white-keyboard-concept-3d.jpg?s=612x612&w=0&k=20&c=4K3mQJuhysinalHluue4ZzDzLT5xxhE4i7rv9CpbvT4="
              alt="Complaint Image"
            />
          </div>
          <div className={styles.textcontainer}>
            <h1 className="mb-4 display-2 fw-bold">Have a Complaint?</h1>
            <p className="mt-3 mb-4">
              Lorem ipsum dolor consectetur adipiscing elit <br />
              Sed ultricies feugiat nisi, in consequat tortor posuere eu.
              <br />
              Praesent sit amet tempor velit, <br />
              sit amet pulvinar magna
            </p>
            <br></br>
            <Link to='/complaint' className="btn btn-info" role="button">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footercontainer}>
        <div className={styles.footercontent}>
          {/* Left Side - Newsletter Form */}
          <div className={styles.leftsided}>
            <div className={styles.newsletterformcontainer}>
              <h2>Subscribe to our Newsletter</h2>
              <p>Stay updated with the latest news and promotions.</p>
              <br></br>
              <form>
                <div className={styles.formwrapper}>
                  <div className={styles.formgroup}>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <br></br>
                <div className={styles.formgroup}>
                  <button type="submit" className={styles.btn}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Attractive Element */}
          <div className={styles.rightsided}>
            <div className="attractive-content">
              <br></br>
              <h3>About F1 Gas Agency</h3>
              <p>
                Welcome to F1 Gas Agency, your trusted partner for all your LPG
                needs. At F1 Gas Agency, we are dedicated to providing reliable
                and efficient gas services to households, businesses, and
                industries. With a commitment to safety, quality, and customer
                satisfaction, we have emerged as a leading player in the gas
                distribution industry.
              </p>
              <button className={styles.btn}>Claim Your Offer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Userhome