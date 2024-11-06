import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


import axios from 'axios';
import React, { useEffect, useState } from 'react';





const ViewAppoinment = () => {
       const [appoinments, setAppoinments] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7061/api/Appointment")
      .then((response) => {
        // console.log("", response);
        setAppoinments(response.data);
        console.log( response.data);
      })
      .catch();
  }, []);

  return (
 

    <div style={{paddingTop:'6rem'}}>
        <h2>View Appoinment</h2>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell> Id</TableCell>
                        <TableCell> PatientName</TableCell>
                        <TableCell> Age</TableCell>
                        <TableCell> Place</TableCell>
                        <TableCell> Gender</TableCell>
                        <TableCell> DoctorName</TableCell>
                        <TableCell> AppointmentDate</TableCell>
                        <TableCell> Department</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            {appoinments.map((item,index)=>
                     <TableRow key={index}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.patientName}</TableCell>
                        <TableCell>{item.age}</TableCell>
                        <TableCell>{item.place}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.doctorName}</TableCell>
                        <TableCell>{item.appointmentDate}</TableCell>
                        <TableCell>{item.department}</TableCell>
                    </TableRow>
             )}
          </TableBody>

            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewAppoinment;