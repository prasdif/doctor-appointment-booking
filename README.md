# HealthCare Appointment Booking App

A modern React web application for booking doctor appointments, consulting healthcare professionals, and managing diagnostics—all in one place.

# Tech Stack

- Frontend: React, React Router- javasciptEs6+
- Icons: Font Awesome
- Styling: CSS (custom)  
- Images/icons: Cloudinary & Local Assets


 # Improvements with More Time
- Add search and filtering capabilities for doctors by specialty, location, or availability
- Integrate user authentication (login/signup)
- Add user profiles for patients and doctors
- Implement role-based dashboards (e.g., admin, doctor, patient)
- Introduce payment gateway integration for paid consultations
- Set up a backend with Node.js for real-time appointment tracking
- Improve accessibility for screen readers and keyboard navigation


# Challenges Faced and Solutions   

Challenge: Initially struggled with displaying a full doctor profile when a user clicked on a doctor's card. The route and data binding weren’t properly set up, causing navigation issues and blank profile pages.

Solution: Refactored the routing logic and passed doctor data using React Router’s `useNavigate` and `state`. Also ensured that the doctor component correctly accessed props or fetched data based on the ID passed in the route.

 

