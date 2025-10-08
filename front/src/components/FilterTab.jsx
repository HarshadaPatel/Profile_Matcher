import React, { useState } from 'react';
import axios from 'axios';

const FilterTab = () => {
  const [filters, setFilters] = useState({
    gender: '',
    location: '',
    habits: '',
    education: '',
    caste: '',
  });

  const [results, setResults] = useState([]);

  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const params = new URLSearchParams(filters).toString();
    const res = await axios.get(`http://localhost:5000/api/profile/filter?${params}`);
    setResults(res.data);
  };

  return (
    <div>
      <h2>Filter Profiles</h2>

      <select name="gender" onChange={handleChange}>
        <option value="">Your Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select name="location" onChange={handleChange}>
        <option value="">Location</option>
        <option value="India">India</option>
        <option value="Abroad">Abroad</option>
      </select>

      <select name="habits" onChange={handleChange}>
        <option value="">Habits</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Occasionally">Occasionally</option>
      </select>

      <select name="education" onChange={handleChange}>
        <option value="">Education</option>
        <option value="Graduate">Graduate</option>
        <option value="Postgraduate">Postgraduate</option>
        <option value="Doctorate">Doctorate</option>
        <option value="Professional Degree">Professional Degree</option>
      </select>

      <select name="caste" onChange={handleChange}>
        <option value="">Caste</option>
        <option value="Patel">Patel</option>
        <option value="Jain">Jain</option>
        <option value="No preference">No preference</option>
      </select>

      <button onClick={handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Gender</th>
            <th>Location</th>
            <th>Habits</th>
            <th>Education</th>
            <th>Caste</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {results.map(profile => (
            <tr key={profile.id}>
              <td>{profile.id}</td>
              <td>{profile.gender}</td>
              <td>{profile.location_preference}</td>
              <td>{profile.habits_preference}</td>
              <td>{profile.education_preference}</td>
              <td>{profile.caste_preference}</td>
              <td>{profile.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterTab;
