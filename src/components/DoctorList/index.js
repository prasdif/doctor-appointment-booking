import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
 
const doctors = [
  {
    id: 1,
    name: "Dr. Sam Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    status: "Available",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039343/doct1_yvwa1u.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Paul",
    specialty: "Dermatology",
    rating: 4.7,
    status: "Available",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039343/doct2_dyeixd.webp",
  },
  {
    id: 3,
    name: "Dr. Eric Rodriguez",
    specialty: "General Medicine",
    rating: 4.8,
    status: "Busy",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039343/doc3_qu3eih.avif",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurology",
    rating: 4.9,
    status: "Available",
    image: "https://res.cloudinary.com/dztmp3saa/image/upload/v1754039342/doct5_scyjqy.webp",
  },
];

const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4 && rating % 1 < 0.8;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} color="#facc15" />);
  }
  if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" color="#facc15" />);
  while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} color="#facc15" />);
  return stars;
};

const DoctorCard = ({ doctor }) => (
  <Link to={`/doctor/${doctor.id}`} className="doctor-card-link">
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-img" />
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p className="specialty">{doctor.specialty}</p>
        <div className="rating">
          {getStars(doctor.rating)} <span>{doctor.rating}</span>
        </div>
        <span className={`status ${doctor.status.toLowerCase()}`}>{doctor.status}</span>
      </div>
    </div>
  </Link>
);

const DoctorList = () => (
  <div className="doctor-list">
    {doctors.map((doctor) => (
      <DoctorCard key={doctor.id} doctor={doctor} />
    ))}
  </div>
);

export default DoctorList;
