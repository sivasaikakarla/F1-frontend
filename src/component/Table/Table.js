import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { format } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CSVLink } from 'react-csv';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const searchContainerStyles = {
  float: "right",
  borderColor: "black",
};

const inputStyles = {
  float: "left",
  padding: "6px",
  marginTop: "10px",
  marginRight: "20px",
  fontSize: "17px",
  border: "none",
  width: "150px",
};

const buttonStyles = {
  float: "right",
  padding: "6px 10px",
  marginTop: "10px",
  marginRight: "50px",
  background: "#ddd",
  fontSize: "17px",
  border: "none",
  cursor: "pointer",
};




const makeStyle = (status) => {
  if (status === "completed") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [data1, setData] = useState([]);
  const [orderId, setorderId] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_DOMIN}/api/admintable`)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log(orderId);
    try {
      // Make an API request to update the order status
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/searchorder`, {
        orderId,
      });
      console.log("hi");
    } catch (error) {
      console.error("Error updating order status:", error.message);
    }
  };
  const itemsPerPage = 6;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, data1.length - 1));
  };
  

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };


  const paginationButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    textdecoration: 'none'
  };

  const [sortConfig, setSortConfig] = useState({ field: null, order: 'asc' });

  const requestSort = (field) => {
    let order = 'asc';
    if (sortConfig.field === field && sortConfig.order === 'asc') {
      order = 'desc';
    }
    setSortConfig({ field, order });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig.field) {
      return;
    }
    return sortConfig.field === name ? (sortConfig.order === 'asc' ? 'sorted ascending' : 'sorted descending') : '';
  };

  const sortedData = () => {
    const sortableData = [...data1];
    if (sortConfig.field) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.field] < b[sortConfig.field]) {
          return sortConfig.order === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.field] > b[sortConfig.field]) {
          return sortConfig.order === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

 
  const formatDataForCSV = () => {
    const csvData = sortedData().map((row) => ({
      'Order ID': row.orderId,
      Type: row.type,
      Name: row.connection.fullName,
      Status: row.status,
      Date: format(new Date(row.timestamp), 'yyyy-MM-dd HH:mm:ss'),
    }));
  
    return csvData;
  };
  


  return (
    
    <div className="Table">
     
      <div className="search-container" style={searchContainerStyles}>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ..."
            />
          </InputGroup>
        </Form>
      </div>
      <br></br>
      <h3>Recent Orders</h3>
      <TableContainer component={Paper} style={{ boxShadow: '' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => requestSort('orderId')} className={getClassNamesFor('orderId')}>
              Order ID <ArrowDropDownIcon />{sortConfig.field === 'orderId'}
            </TableCell>
            <TableCell onClick={() => requestSort('type')} className={getClassNamesFor('type')} align="left">
              Type <ArrowDropDownIcon />{sortConfig.field === 'type' }
            </TableCell>
            <TableCell onClick={() => requestSort('connection.fullName')} className={getClassNamesFor('connection.fullName')} align="left">
              Name<ArrowDropDownIcon /> {sortConfig.field === 'connection.fullName' }
            </TableCell>
            <TableCell onClick={() => requestSort('status')} className={getClassNamesFor('status')} align="left">
              Status <ArrowDropDownIcon />{sortConfig.field === 'status' }
            </TableCell>
            <TableCell onClick={() => requestSort('timestamp')} className={getClassNamesFor('timestamp')} align="left">
              Date<ArrowDropDownIcon /> {sortConfig.field === 'timestamp' }
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ color: 'white' }}>
          {sortedData()
            .filter((row) => {
              return (
                search.toLowerCase() === '' ||
                row.orderId.toLowerCase().startsWith(search) ||
                row.connection.fullName.toLowerCase().startsWith(search)
              );
            }).reverse()
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((row) => (
              <TableRow
                key={row.name} // Make sure each row has a unique key
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.connection.fullName}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  {format(new Date(row.timestamp), 'yyyy-MM-dd HH:mm:ss')}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px',marginBottom:'30px' }}>
            <button
              onClick={handleClickPrev}
              disabled={currentIndex === 0}
              style={paginationButtonStyle}
            >
              <FaArrowLeft /> Prev
            </button>
            <CSVLink
        data={formatDataForCSV()}
        filename={'exported_data.csv'}
        style={paginationButtonStyle}
      >
        Download
      </CSVLink>
            <button
              onClick={handleClickNext}
              disabled={currentIndex + itemsPerPage >= data1.length}
              style={{ textDecoration: 'none', ...paginationButtonStyle }}
            >
              Next <FaArrowRight />
            </button>
            
          </div>
    </div>
  );
}
