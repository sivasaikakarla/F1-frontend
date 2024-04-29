import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState,useEffect } from "react";
import  axios  from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
 



export default function BasicTable() {
  const [data1, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showDocuments, setShowDocuments] = useState({});


  useEffect(() => {
    fetchData();
  }, [data1]);


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/approvedb");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDocument = (_id) => {
    setShowDocuments((prevShowDocuments) => ({
      ...prevShowDocuments,
      [_id]: !prevShowDocuments[_id],
    }));
  };


  
const searchContainerStyles = {
  float: 'right',
  borderColor: 'black',
};

const inputStyles = {
  float: 'left',
  padding: '6px',
  marginTop: '10px',
  marginRight: '20px',
  fontSize: '17px',
  border: 'none',
  width: '150px',
};

const buttonStyles = {
  float: 'right',
  padding: '6px 10px',
  marginTop: '10px',
  marginRight: '50px',
  background: '#ddd',
  fontSize: '17px',
  border: 'none',
  cursor: 'pointer',
};

const handleSearchSubmit = (event) => {
  // Handle the form submission logic here
  event.preventDefault();
  // You may want to perform additional actions or navigate to a different page
};



  return (
    <div className="Table">
      <div className="search-container" style={searchContainerStyles}>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </InputGroup>
        </Form>
      </div>
    <h3>Pending Requests</h3>
    <TableContainer component={Paper} style={{ boxShadow: "" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">phone</TableCell>
            <TableCell align="left">area</TableCell>
            <TableCell align="left">document</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ color: "white" }}>
          {data1 .filter((row) => {
                return search.toLowerCase() === ""
                  ? row
                  : row.fullName.toLowerCase().startsWith(search);
              }).map((row) => (
            <TableRow
              key={row.email} // Make sure each row has a unique key
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.area}</TableCell>
              <TableCell align="left" className="Details">
              <button onClick={() => toggleDocument(row._id)}>
                    {showDocuments[row._id] ? "Hide Document" : "Show Document"}
                  </button>
                  {showDocuments[row._id] && (
                    <iframe
                      src={`http://localhost:8080/${row.document}`}
                      width="100%"
                      height="500px"
                      title="Document Viewer"
                    ></iframe>
                  )}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>

  
  );
}