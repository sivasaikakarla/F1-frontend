import React from 'react'
import "./Middle.css";
import {CardsData} from '../Data/Data'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
const Middle = () => {
  return (
    <div className="MainDash">
    
      <Cards />
      <Table />
    </div>
  )
}

export default Middle