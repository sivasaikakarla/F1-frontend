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
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


export default function BasicTable() {
  const [data1, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showDocuments, setShowDocuments] = useState({});

  useEffect(() => {
    fetchData();
  }, [data1]);
  const searchContainerStyles = {
    float: 'right',
    borderColor: 'black',
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/approveconn`);
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
    <h3>Pending Connections</h3>
    <TableContainer component={Paper} style={{ boxShadow: "" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Connection Id</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">phone</TableCell>
            <TableCell align="left">area</TableCell>
            <TableCell align="left">document</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ color: "white" }}>
          {data1.filter((row) => {
                return search.toLowerCase() === ""
                  ? row
                  : row.connectionId.toLowerCase().startsWith(search);
              }).map((row) => (
            <TableRow
              key={row.email} // Make sure each row has a unique key
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="left">{row.connectionId}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.area}</TableCell>
              <TableCell align="left" className="Details">
              <button onClick={() => toggleDocument(row._id)}>
                    {showDocuments[row._id] ? "Hide Document" : "Show Document"}
                  </button>
                  {showDocuments[row._id] && (
                    <iframe
                      src={`${process.env.REACT_APP_SERVER_DOMIN}/${row.document}`}
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