import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


import axios from 'axios';
import React, { useEffect, useState } from 'react';





const ViewMedicine = () => {
       const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7061/api/Medicine")
      .then((response) => {
        // console.log("", response);
        setMedicines(response.data);
        console.log( response.data);
      })
      .catch();
  }, []);

  return (
 

    <div style={{paddingTop:'6rem'}}>
        <h2>View Medicine</h2>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell> MedicineId</TableCell>
                        <TableCell> Name</TableCell>
                        <TableCell> Quantity</TableCell>
                        <TableCell> Price</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
            {medicines.map((item,index)=>
                     <TableRow key={index}>
                        <TableCell>{item.medicineId}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        
                    </TableRow>
             )}
          </TableBody>

            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewMedicine;