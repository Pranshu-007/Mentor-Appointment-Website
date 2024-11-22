import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mentors from '../jsonfile.json'; // Assuming this contains the mentor data
import CalendarUi from '../components/calendarUi'; // Importing your Calendar component
import './mentor.css';

const MentorDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name); // Decode the mentor name
  const mentor = mentors.find((mentor) => mentor.name === decodedName);

  if (!mentor) {
    return <h1>Mentor not found!</h1>;
  }

  // State to manage the selected date, time slot, and form inputs
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
  });

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = date.format('YYYY-MM-DD');
    const selectedSlot = mentor.availableSlots.find((slot) => slot.date === formattedDate);
    if (selectedSlot) {
      setAvailableTimeSlots(selectedSlot.slots);
    } else {
      setAvailableTimeSlots([]);
    }
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle booking submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.topic) {
      alert('Congratulations! Your booking is confirmed.');
      setFormData({ name: '', email: '', topic: '' }); // Reset form
      setSelectedTimeSlot(null); // Reset selected time slot
      setAvailableTimeSlots([]); // Clear available slots
      setSelectedDate(null); // Reset selected date
      window.location.reload(); // Refresh page
    } else {
      alert('Please fill out all the fields.');
    }
  };

  return (
    <div className="mentor-container">
      <div className="mentor-details">
      <div className="mentor-card">
  <div className="mentor-header">
    <img
      src={"/icons/user.png"}
      alt={mentor.name}
      className="mentor-image"
    />
    <div className="mentor-info">
      <h1 className="mentor-name">{mentor.name}</h1>
      <p className="mentor-title">{mentor.title}</p>
      <div className="mentor-rating">
        ⭐ {mentor.rating} / 5
      </div>
    </div>
  </div>

  <div className="mentor-body">
    <p className="mentor-bio">{mentor.bio}</p>
    <div className="mentor-skills">
      <h3>Skills:</h3>
      <ul>
        {mentor.skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  </div>

  <div className="mentor-footer">
    <button className="contact-button">Contact Mentor</button>
    <button className="view-portfolio-button">View Portfolio</button>
  </div>
</div>


      </div>

      <div className="booking-section">
        <div className="calendar-time-slot-container">
          <div className="calendar-container">
            <CalendarUi
              availableDates={mentor.availableSlots.map((slot) => slot.date)}
              onDateSelect={handleDateSelect}
            />
          </div>

          <div className="time-slot-container">
            {availableTimeSlots.length > 0 && (
              <div className="time-slot-list">
                <h4>Available Time Slots:</h4>
                <ul>
                  {availableTimeSlots.map((slot, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleTimeSlotSelect(slot)} 
                        className="time-slot-button"
                      >
                        {slot}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTimeSlot && (
              <div className="booking-form">
                <h4>Book Your Session:</h4>
                <form onSubmit={handleBookingSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                  <textarea
                    name="topic"
                    placeholder="Discussion Topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    required
                    className="input-field textarea"
                  />
                  <button type="submit" className="book-button">Book Now</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
