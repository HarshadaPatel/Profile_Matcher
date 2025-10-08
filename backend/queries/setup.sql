-- Create the database
CREATE DATABASE IF NOT EXISTS profile_matcher;
USE profile_matcher;

-- Create the profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  gender VARCHAR(10),
  location_preference VARCHAR(50),
  country_preference VARCHAR(50),
  habits_preference VARCHAR(50),
  education_preference VARCHAR(50),
  caste_preference VARCHAR(100),
  own_caste VARCHAR(50),
  points INT DEFAULT 0
);

-- Insert sample profiles
INSERT INTO profiles (
  gender, location_preference, country_preference, habits_preference,
  education_preference, caste_preference, own_caste, points
) VALUES
('male', 'Abroad', 'USA', 'No', 'Graduate', 'No preference', 'Patel', 80),
('male', 'Abroad', 'USA', 'No', 'Postgraduate', 'Jain', 'Jain', 85),
('female', 'India', 'India', 'Occasionally', 'Graduate', 'No preference', 'Patel', 90),
('female', 'India', 'India', 'No', 'Graduate', 'Patel', 'Patel', 88),
('female', 'India', 'India', 'No', 'Postgraduate', 'Jain', 'Jain', 92),
('male', 'India', 'India', 'Yes', 'High School', 'Patel', 'Patel', 70),
('male', 'India', 'USA', 'Yes', 'High School', 'Patel', '', 0),
('male', 'Abroad', 'UK', 'No', 'Graduate', 'Jain', '', 0),
('Male', 'India', 'USA', 'Yes', 'Graduate', 'Patel', 'Patel', 0),
('Female', 'Abroad', 'USA', 'Yes', 'Graduate', 'Patel', '', 0);
