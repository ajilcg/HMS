import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


import axios from 'axios';
import React, { useEffect, useState } from 'react';





const ViewDoctor = () => {
       const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7277/api/Doctor")
      .then((response) => {
        // console.log("", response);
        setDoctors(response.data);
        console.log( response.data);
      })
      .catch();
  }, []);

  return (
 

    <div style={{paddingTop:'6rem'}}>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell> Id</TableCell>
                        <TableCell>  Name</TableCell>
                        <TableCell> Specialization</TableCell>
                        <TableCell> Time</TableCell>
                        <TableCell> Day</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            {doctors.map((item,index)=>
                     <TableRow key={index}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.specialization}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.day}</TableCell>
                    </TableRow>
             )}
          </TableBody>

            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewDoctor;