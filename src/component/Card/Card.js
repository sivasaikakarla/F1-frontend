// Card.js
import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LayoutGroup, motion } from "framer-motion"
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <LayoutGroup>
      <CompactCard param={props} setExpanded={() => setExpanded(true)} />
    </LayoutGroup>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        
        <span style={{ fontWeight: 'bold', fontSize: '36px' }}>{param.title}</span>
        <span style={{fontSize: '26px',backgroundColor:'white',borderRadius:'30px',color:'black',width:'40px',textAlign:'center'}}>{param.value} </span>
      </div>
      
    </motion.div>
  );
}



export default Card;