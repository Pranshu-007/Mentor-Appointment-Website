import React from 'react';
import './mentor.css';

const MentorCard = ({ mentor, onClick }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="../icons/user.png" alt="Mentor" />
      </div>
      <div className="category">{mentor.name}</div>
      <div className="heading">
        {mentor.bio}
        <div className="author">
          <span className="name">Rating</span> {mentor.rating} ⭐
        </div>
          <button className='btn' onClick={onClick}>More Deatail</button>
      </div>
    </div>
  );
};

export default MentorCard;
