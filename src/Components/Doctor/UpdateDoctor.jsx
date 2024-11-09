import React, { useState } from 'react';
import axios from 'axios';

const UpdateDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState(''); // State to hold the patient ID for updates
  const [newdoctor, setNewdoctor] = useState({
    id: '', // Add id to keep track of the patient being updated
    name: '',
    specialization: '',
    time: '',
    day: ''
    
  });

  const updateDoctor = () => {
    if (!doctorId) {
      console.error("Doctor ID is required for update");
      return;
    }

    // Ensure that the newPatient object includes the ID for the PUT request
    const updatedDoctor = {
      ...newdoctor,
      id: doctorId // Assign the doctorId to the id field
    };

    axios
      .put("https://localhost:7061/api/Doctor/${doctorId}", updatedDoctor)
      .then((response) => {
        console.log("Doctor updated:", response.data);
        // Update the doctor list to reflect the changes
        setDoctors((prevDoctor) =>
          prevDoctor.map((doctor) =>
            doctor.id === parseInt(doctorId) ? response.data : doctor
          )
        );
        // Clear the input fields after submission
        setNewdoctor({
          id: '',
          name: '',
          specialization: '',
          time: '',
          day: ''
        });
        setDoctorId(''); // Clear the doctor ID
      })
      .catch((error) => {
        console.error("There was an error updating the doctor!", error);
      });
  };

  return (
    <div style={{paddingTop:'6rem'}}>
      {/* <h2>Doctor Update</h2> */}
      <div>
  <strong className='form-group'>Update Doctors</strong>
<hr></hr>
  </div>
      {/* <div class="form-group col-md-6">
      <label for='Doctor ID'>Doctor ID</label>
      <input 
        type="text" 
        placeholder="Doctor ID" 
        value={doctorId} 
        onChange={(e) => setDoctorId(e.target.value)} 
      />
      </div> */}

<div class="form-group col-md-6">
      <label for='Doctor ID'> Doctor ID</label>
      <input required id='Doctor ID' onChange={(e) => setDoctorId(e.target.value)}  name='Doctor ID'   class="form-control" placeholder=" Doctor ID"></input>
    </div> 


      {/* <div class="form-group col-md-6">
      <label for='Name'>Name</label>
      <input 
        type="text" 
        placeholder=" Name" 
        value={newdoctor.name} 
        onChange={(e) => setNewdoctor({ ...newdoctor, name: e.target.value })} 
      />
       </div> */}
       <div class="form-group col-md-6">
      <label for='Name'> Name</label>
      <input required id='Name' onChange={(e) => setNewdoctor({ ...newdoctor, name: e.target.value })}  name='Name'   class="form-control" placeholder=" Name"></input>
    </div> 

       {/* <div class="form-group col-md-6">
       <label for='Specialization'>Specialization</label>
      <input 
        type="text" 
        placeholder="Specialization" 
        value={newdoctor.specialization} 
        onChange={(e) => setNewdoctor({ ...newdoctor, specialization: e.target.value })} 
      />
       </div> */}
       <div class="form-group col-md-6">
      <label for='Specialization'> Specialization</label>
      <input required id='Specialization'onChange={(e) => setNewdoctor({ ...newdoctor, specialization: e.target.value })}   name='Specialization'   class="form-control" placeholder=" Specialization"></input>
    </div> 

       {/* <div class="form-group col-md-6">
       <label for='Time'>Time</label>
      <input 
        type="time" 
        placeholder="Time" 
        value={newdoctor.time} 
        onChange={(e) => setNewdoctor({ ...newdoctor, time: e.target.value })} 
      />
      </div> */}
 <div class="form-group col-md-6">
      <label for='Time'> Time</label>
      <input  required id='Time'onChange={(e) => setNewdoctor({ ...newdoctor, specialization: e.target.value })}   name='Time'   class="form-control" placeholder=" Time"></input>
    </div> 

      {/* <div class="form-group col-md-6">
      <label for='Day'>Day</label>
      <input 
        type="date" 
        placeholder="Day" 
        value={newdoctor.day} 
        onChange={(e) => setNewdoctor({ ...newdoctor, day: e.target.value })} 
      />
       </div> */}
<div class="form-group col-md-6">
      <label for='Day'> Day</label>
      <input  required id='Day'onChange={(e) => setNewdoctor({ ...newdoctor, day: e.target.value })}   name='Day'   class="form-control" placeholder=" Day"></input>
    </div> 

     
      <div class="btnb">
    <button type="submit" class='btn subbtn' >Update Doctor</button> 
  
   </div>

      {/* <h3>Registered Doctors:</h3> */}
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} {doctor.specialization} - {doctor.time} - {doctor.day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateDoctor;