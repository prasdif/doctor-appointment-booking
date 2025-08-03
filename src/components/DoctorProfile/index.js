import { useParams, Link } from "react-router-dom";
import "./index.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sam Johnson",
    specialty: "Cardiology",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039343/doct1_yvwa1u.jpg",
    bio: "Sam’s been in the field for 15+ years — Experienced cardiologist focused on heart health and preventive care. Known for compassionate care and accurate diagnoses.",
    availability: {
      Monday: "10:00 AM - 1:00 PM",
      Tuesday: "2:00 PM - 6:00 PM",
      Wednesday: "10:00 AM - 1:00 PM",
      Thursday: "Unavailable",
      Friday: "9:00 AM - 12:00 PM",
    },
  },
  {
    id: 2,
    name: "Dr. Michael Paul",
    specialty: "Dermatology",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039343/doct2_dyeixd.webp",
    bio: "Michael has over 10 years of experience specializing in skin health, including acne treatment, eczema, and cosmetic dermatology. Dedicated to delivering personalized care and advanced treatment solutions.",
    availability: {
      Monday: "1:00 PM - 4:00 PM",
      Tuesday: "Unavailable",
      Wednesday: "10:00 AM - 2:00 PM",
      Thursday: "3:00 PM - 6:00 PM",
      Friday: "10:00 AM - 1:00 PM",
    },
  },
  {
    id: 3,
    name: "Dr. Eric Rodriguez",
    specialty: "General Medicine",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039343/doc3_qu3eih.avif",
    bio: "Eric is a trusted general physician with 12+ years of clinical experience. He’s passionate about holistic health, preventive care, and accurate diagnoses for patients of all ages.",
    availability: {
      Monday: "1:00 PM - 4:00 PM",
      Tuesday: "Unavailable",
      Wednesday: "10:00 AM - 2:00 PM",
      Thursday: "3:00 PM - 6:00 PM",
      Friday: "10:00 AM - 1:00 PM",
    },
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurology",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039342/doct5_scyjqy.webp",
    bio: "With more than 14 years in neurology, James is known for treating complex neurological disorders with precision. Patients appreciate his calm demeanor and clear, thorough explanations.",
    availability: {
      Monday: "1:00 PM - 4:00 PM",
      Tuesday: "Unavailable",
      Wednesday: "10:00 AM - 2:00 PM",
      Thursday: "3:00 PM - 6:00 PM",
      Friday: "10:00 AM - 1:00 PM",
    },
  },
];

function DoctorProfile() {
  const { id } = useParams(); 
  const doctor = doctors.find((doc) => doc.id === parseInt(id)); 

  if (!doctor) {
    return (
      <div className="profile-container">
        <p>Hmm. We couldn't find that doctor. Maybe double-check the link?</p>
      </div>
    );
  }

  return (
    <div className="profile-container" id={`doctor-${doctor.id}`}>
      <div className="profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />

        <div className="profile-info">
          <h2>{doctor.name}</h2>
          <p className="profile-specialty">{doctor.specialty}</p>
          <p className="profile-bio">{doctor.bio}</p>

          <h4>Availability This Week:</h4>
          <ul className="availability-list">
            {Object.entries(doctor.availability).map(([day, time]) => (
              <li key={day}>
                <strong>{day}:</strong>{" "}
                {time === "Unavailable" ? "Not seeing patients" : time}
              </li>
            ))}
          </ul>

          <Link to="/appointment" className="book-button">
            Book An Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
