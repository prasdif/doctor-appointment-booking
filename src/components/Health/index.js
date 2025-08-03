import { useNavigate } from 'react-router-dom'; 
import DoctorList from '../DoctorList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import './index.css';


function Health() {
  const navigate = useNavigate(); 

  return (
    <div className="background">
      <header className="navbar">
        <div className="logo-container">
          <FontAwesomeIcon icon={faNotesMedical} className="logo-icon" />
          <h1 className="logo-text">HealthCare</h1>
        </div>

        <nav className="nav-links">
          <span onClick={() => navigate("/doctors")} className="nav-link active">Book Appointment</span>
          <span onClick={() => navigate("/appointment")} className="nav-link">My Appointments</span>
          <span onClick={() => navigate("/doctors")} className="nav-link">Find Doctors</span>
        </nav>
      </header>

      <main className="main-container">
        <img
          className="top-icon"
          src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754145746/8351257_3886130_iirlxn.jpg"
          alt="Doctor Icon"
        />

        <div className="main-content">
          <h1 className="heading">
            Book Your Doctor Appointment Today
          </h1>
          <p className="contextpara">
            Connect with top-rated healthcare professionals in your area. Schedule appointments easily and get the care you deserve.
          </p>
        </div>

        <div className="features-container">
          <div className="feature-box">
            <img
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754115317/doctor-consultation_umig69.png"
              alt="Doctor consultation"
            />
            <h3>Online Consultations</h3>
            <p style={{ fontWeight: 'bold' }}>
              Connect with certified doctors anytime, anywhere.
            </p>
            <p>Schedule secure video consultations from home and get expert advice fast.</p>
          </div>

          <div className="feature-box">
            <img
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754115317/healthcare_1_rsar4w.png"
              alt="Comprehensive Care"
            />
            <h3>Comprehensive Care</h3>
            <p style={{ fontWeight: 'bold' }}>
              Personalized treatment and health support.
            </p>
            <p>
              Specialists ensure you receive the best care with empathy and attention to your needs.
            </p>
          </div>

          <div className="feature-box">
            <img
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754115317/blood-test_gdaiu7.png"
              alt="Lab Test"
            />
            <h3>Lab Tests & Diagnostics</h3>
            <p style={{ fontWeight: 'bold' }}>
              Accurate testing for faster diagnosis.
            </p>
            <p>
              Access trusted lab services and get results online—quick, reliable, confidential.
            </p>
          </div>
        </div>
      </main>

      <div className='bookcontainer'>
        <h1 className='bookappointmentheading'>Book an Appointment with Our Experts</h1>
        <p className='bookappointmentpara'>Choose your preferred doctor and schedule a consultation in minutes.
          Get quality healthcare <br /> online or in person at your convenience
        </p>
      </div>

      <div className="booking-icons">
        <div className="icon-item">
          <img
            alt="booking"
            src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754156801/calendar_1250620_gwblwg.png"
          />
          <p>Easy Booking</p>
        </div>
        <div className="icon-item">
          <img
            alt="service"
            src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754156801/service_18832179_xxtayz.png"
          />
          <p>Quick Service</p>
        </div>
        <div className="icon-item">
          <img
            alt="safe"
            src="https://res.cloudinary.com/dztmp3saa/image/upload/v1754156801/military_18591855_mozccy.png"
          />
          <p>Secure & Safe</p>
        </div>
      </div>

      <DoctorList />
    </div>
  );
}

export default Health;