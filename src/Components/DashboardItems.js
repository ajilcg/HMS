const DashboardItems=[
    {
        id:1,
        imgs:"src/assets/images/patient.jpg",
        titles:"Patient Management",
        content:["Register new patients","update patient profiles","manage medical history"],
        path:["RegisterPatient","patientGrid/1","patientGrid/3"]
    },
    {
        id:2,
        imgs:"src/assets/images/doctor.jpg",
        titles:'Doctor Management',
        content:["Manage doctors","specializations", "scheduling"],
        path:["ManageDoctor","ViewDoctor","UpdateDoctor"]
    },
    {
        id:3,
        imgs:"src/assets/images/appointment.jpg",
        titles:"Appointment Scheduling",
        content:["Book and manage appointments","automated scheduling alerts"],
        path:["AddAppoinment","ViewAppoinment"]
    },
     {
    id:4,
    imgs:"src/assets/images/billing.jpg",
    titles:"Patient Billing System",
    content:["Track treatments","medications","generate bills for patients"],
    path:["patientGrid/2","Medications","GenerateBill"]
    },
    {
        id:5,
        imgs:"src/assets/images/pharmacy.jpg",
        titles:"Pharmacy Management",
        content:["Manage medicine inventory", "sales"],
        path:["AddMedicine","ViewMedicine"]
    },

]

export default DashboardItems;