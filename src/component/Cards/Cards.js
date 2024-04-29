// Crads.js
import React from "react";
import "./Cards.css";
import { cardsData } from "../Data/Data";
import { useState,useEffect } from "react";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import  axios  from "axios";

import Card from "../Card/Card";

const Cards = () => {


  const [data1, setData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/datas`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  const ordersCount = data1.map(order => order._id).length;
  const pendingCount = data1.filter(order => order.status === 'pending').length;
  const completedcount=data1.filter(order => order.status === 'completed').length;
  const per1 = Math.floor((completedcount / ordersCount) * 100);

  const [data2,setData2]=useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/connectiondatas`)
      .then(response => {
        setData2(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  const connCount = data2.map(conn => conn._id).length;
  const conncompletedcount=data2.filter(order => order.status === 'completed').length;
  const per2 = Math.floor((conncompletedcount / connCount) * 100);

  const [data3,setData3]=useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/complaintdata`)
      .then(response => {
        setData3(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  const comCount = data3.map(conn => conn._id).length;
  const comcompletedcount=data3.filter(order => order.status === 'completed').length;
  const per3 = Math.floor((comcompletedcount / comCount) * 100);
  
  const [data4, setData4] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/dbdatas`)
      .then(response => {
        setData4(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  const dbcount=data4.map(db => db._id).length;
  const dbcompletedcount=data4.filter(dbs => dbs.status === 'completed').length;
  // console.log(dbcount)

const cardsData = [
    {
      title: "Orders",
      color: {
        backGround: "linear-gradient(180deg, #0000FF 0%, #0000FF 100%)",
        boxShadow: "",
      },
      barValue: per1,
      value: ordersCount,
      png: UilUsdSquare,
      
    },
    {
      title: "Connections",
      color: {
        backGround: "linear-gradient(180deg, #0000FF 0%, #0000FF 100%)",
        boxShadow: "",
      },
      barValue: per2,
      value: connCount,
      png: UilMoneyWithdrawal,
      
    },
    // {
    //   title: "Complaints",
    //   color: {
    //     backGround:
    //       "linear-gradient(#0000FF -146.42%, #0000FF -46.42%)",
    //     boxShadow: "",
    //   },
    //   barValue: per3,
    //   value: comCount,
    //   png: UilClipboardAlt,
      
    // },
    {
      title: "DeliveryBoys",
      color: {
        backGround: "linear-gradient(180deg, #0000FF 0%, #0000FF 100%)",
        boxShadow: "",
      },
      barValue: per1,
      value: dbcompletedcount,
      png: UilUsdSquare,
      
    },
    
  ];

  return (
    <div>
    
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              
            />
          </div>
        ); 
      })}
    </div></div>
  );
};

export default Cards;