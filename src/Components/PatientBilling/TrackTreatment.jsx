import { WidthFull } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import '../Patient/Patient.css';
import { Accordion, Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export const TrackTreatment = () => {
    const location=useLocation();
    const navigate=useNavigate();
      const pId=location.state; 
     const {value}=useParams();


    var currentdate = new Date(); 
    var datetime =   currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    const[medicalForm,setMedicalForm]=useState({
        medicalDetails:'',updatedDate:datetime,patientId:pId

    })
    const [response, setResponse] = useState(null);
const [error, setError] = useState(null);
    const[medicalHis,setMedicalHis]=useState(['']);
    const[form,setForm]=useState({
        firstName: '',
       lastName: '',
       dateOfBirth: '',
       email: '',
       gender: '',
       maritalStatus: '',
       address:'',
       contactNumber: '',
       city:'',
       state:'',
       emergancyContactNumber: '',
       medicalHistory:''
          });
          
          useEffect(() => {
          
            fetch("https://localhost:44338/api/Patient/"+pId)
              .then((data) => data.json())
              .then((data) => setForm(data))
           
          },[],
          
          )
 
 useEffect(()=>{

    fetch("https://localhost:44338/api/Medical/"+pId)
    .then((data)=>data.json())
    .then((data)=>setMedicalHis(data))
},[],)

function handleChange(e){
    setMedicalForm({...medicalForm,[e.target.name]:e.target.value});
 }
console.log(medicalForm)

const finalOut = async (e) => {
    e.preventDefault();

     try {
        const res = await axios.post("https://localhost:44338/api/Medical", medicalForm); 
        
       setResponse(res.data);
      console.log(res.data);
           setError(null); // Clear previous errors 
           window.location.reload();
        
    } catch (err) {
      setError(err.response ? err.response.data : 'An error occurred');
      setResponse(null); // Clear previous response
    }
}
 
console.log(medicalHis) ;
   return (
    
<Form onSubmit={finalOut}>
        <div id='Accordion' >
        <div className='row'>
                      <div className='col-sm-6' style={{paddingTop:'3rem'}}>
         
        <Card
          bg='white'
           text='dark' 
          
          className="mb-2"
        >
          <Card.Header style={{backgroundColor:'#aa66cc',color:'white'}}>Patient Information</Card.Header>
          <Card.Body>
            <Card.Title> {form.firstName+' '+form.lastName} </Card.Title>
            <Card.Text>
                Gender : {form.gender}<br></br>
                Date of Birth : {form.dateOfBirth}<br></br>
                Marital Status : {form.maritalStatus}<br></br>
                Phone : {form.contactNumber}
                </Card.Text>
           </Card.Body>
        </Card>

       </div>
       <div className='col-sm-6'>
        <strong>Medical History</strong><br></br><br></br>


        <Accordion alwaysOpen='false'  >
        {medicalHis.map((item,index)=>(

<Accordion.Item eventKey={index}>
<Accordion.Header>{item.updatedDate}</Accordion.Header>
<Accordion.Body  >
{item.medicalDetails}
</Accordion.Body>
</Accordion.Item> 
        ))} 
     

     <Accordion.Item eventKey='-1' hidden={decodeURIComponent(value)=='A+.'?true:false}>
<Accordion.Header>Update Medical History</Accordion.Header>
<Accordion.Body  >
<Form.Control as="textarea" onChange={handleChange} name='medicalDetails' rows={3} /> 
 <button  type="submit"  class='btn btn-secondary' >Update</button> 

 </Accordion.Body>
</Accordion.Item> 

    </Accordion>
 
         </div></div></div>
         </Form>

   )
}
export default TrackTreatment