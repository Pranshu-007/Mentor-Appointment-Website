import React, { useState } from 'react';
import './mentor.css';
import MentorCard from './MentorCard';
import mentors from '../jsonfile.json';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const MentorList = () => {
  const navigate = useNavigate()
  const [selectedSkill, setSelectedSkill] = useState('All');

  const uniqueSkills = ['All', ...new Set(mentors.flatMap((mentor) => mentor.skills))];

  const filteredMentors = selectedSkill === 'All'
    ? mentors
    : mentors.filter((mentor) => mentor.skills.includes(selectedSkill));

  return (
    <div className="mentor-list-container">
      {/* <h1 className="mentor-list-heading">Find Your Mentor</h1> */}
      <Navbar rootClassName="navbarroot-class-name"></Navbar>

      <div className="filter-container">
        <label htmlFor="skill-filter" className="filter-label">Filter by Skill:</label>
        <select
          id="skill-filter"
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="filter-dropdown"
        >
          {uniqueSkills.map((skill, index) => (
            <option key={index} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      <div className="mentor-cards-container">
        {filteredMentors.map((mentor, index) => (
          <MentorCard
            key={index}
            mentor={mentor}
            onClick={() => navigate(`/mentor/${mentor.name}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorList;
