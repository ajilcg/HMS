const DashboardItems=[
    {
        id:1,
        imgs:"src/assets/images/patient.jpg",
        titles:"Patient Management",
        content:["Register new patients","update patient profiles","manage medical history"],
        path:["RegisterPatient","UpdatePatient","ManageMedicalHis"]
    },
    {
        id:2,
        imgs:"src/assets/images/doctor.jpg",
        titles:'Doctor Management',
        content:["Manage doctors","specializations", "scheduling"],
        path:["ManageDr","Specializations","Scheduling"]
    },
    {
        id:3,
        imgs:"src/assets/images/appoiment.jpg",
        titles:"Appointment Scheduling",
        content:["Book and manage appointments","automated scheduling alerts"],
        path:["Booking","ScheduleAlert"]
    },
     {
    id:4,
    imgs:"src/assets/images/billing.jpg",
    titles:"Patient Billing System",
    content:["Track treatments","medications","generate bills for patients"],
    path:["TrackTreatment","Medications","GenerateBill"]
    },
    {
        id:5,
        imgs:"src/assets/images/pharmacy.jpg",
        titles:"Pharmacy Management",
        content:["Manage medicine inventory","prescriptions", "sales"],
        path:["ManageDr"]
    },

]

export default DashboardItems;