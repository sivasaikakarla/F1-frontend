import React from 'react';
import Header from '../component/Header';
import sty from './About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const AboutUsPage = () => {
  const companyInfo = {
    name: 'F1 Gas Agency',
    description: 'Providing high-quality gas services with a focus on safety and efficiency.Anyone can book cylinder sitting from home.Delivered within 6 days',
    foundedYear: 2023,
    location: 'Sricity, India',
  };

  const teamMembers = [
    {
      id: 1,
      name: "Ashok",
      role: "Lead",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "K Sivasai",
      role: "Member",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Praneet",
      role: "Member",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Aneesh",
      role: "Member",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "Harideep",
      role: "Member",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add information for the remaining team members
    // ...
  ];

  // Define styles using the styles object
  const styles = {
    aboutUsPage: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      color: '#000000',
      backgroundColor:'#bdbfc0'
    },
    companyInfo: {
      backgroundColor: '#bdbfc0',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      color: "#000000",
    },
    companyName: {
      color: '#000000',
    },
    tagline: {
      fontStyle: 'italic',
    },
    details: {
      fontStyle: 'italic',
      color: '#bdc3c7',
    },
    teamMembers: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
    },
    teamList: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    teamMember: {
      flex: '1',
      margin: '10px',
      padding: '15px',
      backgroundColor: '#ecf0f1',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    teamMemberName: {
      color: '#2c3e50',
    },
    role: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#3498db',
    },
    bio: {
      fontSize: '14px',
    },
    body: {
      backgroundColor:'#2e5d8d',
    },
    
  };

  return (
    <div className={styles.body}>
    <Header/><br></br><br></br><br></br><br></br>
    <div style={styles.aboutUsPage}>
      <section style={styles.companyInfo}>
        <h1 style={styles.companyName}>{companyInfo.name}</h1>
        <p style={styles.tagline}>{companyInfo.description}</p>
        <p style={styles.details}>Founded in {companyInfo.foundedYear} | Located in {companyInfo.location}</p>
      </section>

      <section style={styles.teamMembers}>
        <h2 style={styles.teamMembersTitle}>Meet Our Team</h2>
        <div style={styles.teamList}>
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.teamMember}>
              <h3 style={styles.teamMemberName}>{member.name}</h3>
              <p style={styles.role}>{member.role}</p>
              <p style={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <footer className={sty.footer}>
        <div className={sty.footerdiv1}>
          <a className={sty.footericons} href="/">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a className={sty.footericons} href="/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a className={sty.footericons} href="/">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
        <div className={sty.footerdiv2}>
          <br />
          <p>Copyright ©2023 All rights reserved | Made by Our Team</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;