CREATE TABLE profiles (
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
-- 1. Male candidates looking for partners settled abroad
SELECT COUNT(*) FROM profiles
WHERE gender = 'male' AND location_preference = 'Abroad';

-- 2. Male candidates looking for partners in the USA
SELECT COUNT(*) FROM profiles
WHERE gender = 'male' AND country_preference = 'USA';

-- 3. Male candidates looking for partners in the USA with minimum education Graduate
SELECT COUNT(*) FROM profiles
WHERE gender = 'male' AND country_preference = 'USA'
AND education_preference IN ('Graduate', 'Postgraduate', 'Doctorate', 'Professional Degree');

-- 4. Female clients open to male candidates with occasional alcohol habits
SELECT COUNT(*) FROM profiles
WHERE gender = 'female' AND habits_preference = 'Occasionally';

-- 5. Female clients open to candidates from all castes
SELECT COUNT(*) FROM profiles
WHERE gender = 'female' AND caste_preference = 'No preference';

-- 6. Female clients open to candidates from Patel & Jain castes
SELECT COUNT(*) FROM profiles
WHERE gender = 'female' AND caste_preference IN ('Patel', 'Jain');

-- 7. Female clients open to candidates from their own caste only
SELECT COUNT(*) FROM profiles
WHERE gender = 'female' AND caste_preference = own_caste;


