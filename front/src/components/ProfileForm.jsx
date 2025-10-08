import React, { useState } from 'react';
import axios from 'axios';
import '../styles/form.css';
import FilterTab from './FilterTab'; // or adjust the path if it's in a different folder
const ProfileForm = () => {
  const [form, setForm] = useState({
    gender: '',
    location_preference: '',
    country_preference: '',
    habits_preference: '',
    education_preference: '',
    caste_preference: '',
    own_caste: '',
  });
const [isSaved, setIsSaved] = useState(false);
const [showFilterTab, setShowFilterTab] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /*const handleSubmit = async () => {
    const requiredFields = ['gender', 'location_preference', 'education_preference', 'caste_preference'];
    const missing = requiredFields.filter(field => !form[field]);
    if (missing.length > 0) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/profile', form);
      alert('Profile saved!');
    } catch (err) {
      console.error(err);
      alert('Error saving profile');
    }
  };*/
  const handleSubmit = async () => {
  const requiredFields = ['gender', 'location_preference', 'education_preference', 'caste_preference'];
  const missing = requiredFields.filter(field => !form[field]);
  if (missing.length > 0) {
    alert('Please fill all required fields.');
    return;
  }

  try {
    await axios.post('http://localhost:5000/api/profile', form);
    alert('Profile saved!');
    setIsSaved(true); // Enable search button
  } catch (err) {
    console.error(err);
    alert('Error saving profile');
  }
};

/*
  const handleSearch = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/profile/filter', form);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert('Error fetching results');
    }
  };
*/
/*
const handleSearch = async () => {
  try {
    const query = new URLSearchParams({
      gender: form.gender,
      location: form.location_preference,
      habits: form.habits_preference,
      education: form.education_preference,
      caste: form.caste_preference
    }).toString();

    const res = await axios.get(`http://localhost:5000/api/profile/filter?${query}`);
    setResults(res.data);
  } catch (err) {
    console.error(err);
    alert('Error fetching results');
  }
};
*/
const handleSearch = () => {
  setShowFilterTab(true);
};

  return (
    <div className="form-container">
      <h2>Partner Preferences</h2>

      <div className="form-grid">
        <label>
          What is your gender?
          <select name="gender" onChange={handleChange} value={form.gender}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>
          1. Where would you prefer your partner to be based?
          <select name="location_preference" onChange={handleChange} value={form.location_preference}>
            <option value="">Select location</option>
            <option value="India">India</option>
            <option value="Abroad">Abroad</option>
            <option value="No preference">No preference</option>
          </select>
        </label>

        {form.location_preference === 'Abroad' && (
  <label>
    2. Which country would you prefer your partner to be from?
    <select name="country_preference" onChange={handleChange} value={form.country_preference}>
      <option value="">Select country</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="No preference">No preference</option>
    </select>
  </label>
)}

        <label>
          3. Would you be open to a partner who consumes alcohol, tobacco or has other habits?
          <select name="habits_preference" onChange={handleChange} value={form.habits_preference}>
            <option value="">Select preference</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Occasionally">Occasionally</option>
          </select>
        </label>

        <label>
          4. What is your preferred education level for your partner?
          <select name="education_preference" onChange={handleChange} value={form.education_preference}>
            <option value="">Select education level</option>
            <option value="High School">High School</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Professional Degree">Professional Degree</option>
          </select>
        </label>

        <label>
          5. Are you looking for a partner from a specific community or caste?
          <select name="caste_preference" onChange={handleChange} value={form.caste_preference}>
            <option value="">Select caste preference</option>
            <option value="No preference">No preference</option>
            <option value="Patel">Patel</option>
            <option value="Jain">Jain</option>
            <option value="Own caste">Own caste</option>
          </select>
        </label>

        {form.caste_preference === 'Own caste' && (
          <label>
            If you selected "Own caste", please specify:
            <input
              type="text"
              name="own_caste"
              placeholder="Your own caste"
              value={form.own_caste}
              onChange={handleChange}
            />
          </label>
        )}
      </div>

      <div className="button-group">
  <button onClick={handleSubmit}>Save</button>
  <button onClick={handleSearch} disabled={!isSaved}>Search</button>
</div>


{showFilterTab && <FilterTab />}
    </div>
  );
};

export default ProfileForm;
