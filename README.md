# 💍 Profile Matcher

A full-stack web application to collect user preferences and match profiles for marriage. Users can submit their expectations and filter potential matches based on lifestyle, education, location, and caste preferences.

---

## 🛠 Tech Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MySQL

---

## 🚀 Setup Instructions

### 📦 Backend

1. Navigate to the backend directory.
2. Create a `.env` file with your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=profile_matcher

# Install dependencies:
npm install

# start the server
node server.js

# Navigate to the front/ directory.

# 1.Install dependencies:

npm install

# 2. Start the React app:

npm start

# Run the SQL schema to create the profiles table:
CREATE TABLE profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  gender VARCHAR(10),
  location_preference VARCHAR(50),
  country_preference VARCHAR(50),
  habits_preference VARCHAR(50),
  education_preference VARCHAR(50),
  caste_preference VARCHAR(50),
  own_caste VARCHAR(50),
  points INT DEFAULT 0
);

# API Endpoints
🔹 Save Profile
POST /api/profile

Body: JSON object with user preferences

Action: Inserts a new profile into the database

🔹 Filter Profiles
POST /api/search (or) GET /api/profile/filter?gender=...&location=...

Body or query params: Filter criteria

Action: Returns matching profiles based on preferences

# project structure
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── profile.js
│   └── db.js
├── front/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProfileForm.jsx
│   │   │   └── FilterTab.jsx
│   │   └── App.js
│   └── public/
└── README.md

# features 
🙌 Features
Submit partner preferences via a modern UI

Conditional dropdowns based on location

Save profile to database

Filter and view matching profiles

Toggle between form and filter view

# WorkFlow 
1.User will save profile for what he is looking for then he can go on filter and search from there or from save profile after clicking on search he will be redirect to filter the profiles accordingly.

#🐳 Docker Setup
✅ Prerequisites
Docker and Docker Compose installed

# Build and Run
From the root directory (Profile-Matcher/), run:

docker-compose up --build
This will:

Start a MySQL container and initialize it with setup.sql

Build and run the backend on port 5000

Build and run the frontend on port 3000
# 💍 Profile Matcher

A full-stack web application to collect user preferences and match profiles for marriage. Users can submit their expectations and filter potential matches based on lifestyle, education, location, and caste preferences.

---

## 🛠 Tech Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MySQL

---

## 🚀 Setup Instructions

### 📦 Backend

1. Navigate to the backend directory.
2. Create a `.env` file with your database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=profile_matcher

# Install dependencies:
npm install

# start the server
node server.js

# Navigate to the front/ directory.

# 1.Install dependencies:

npm install

# 2. Start the React app:

npm start

# Run the SQL schema to create the profiles table:
CREATE TABLE profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  gender VARCHAR(10),
  location_preference VARCHAR(50),
  country_preference VARCHAR(50),
  habits_preference VARCHAR(50),
  education_preference VARCHAR(50),
  caste_preference VARCHAR(50),
  own_caste VARCHAR(50),
  points INT DEFAULT 0
);

# API Endpoints
🔹 Save Profile
POST /api/profile

Body: JSON object with user preferences

Action: Inserts a new profile into the database

🔹 Filter Profiles
POST /api/search (or) GET /api/profile/filter?gender=...&location=...

Body or query params: Filter criteria

Action: Returns matching profiles based on preferences

# project structure
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── profile.js
│   └── db.js
├── front/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProfileForm.jsx
│   │   │   └── FilterTab.jsx
│   │   └── App.js
│   └── public/
└── README.md

# features 
🙌 Features
Submit partner preferences via a modern UI

Conditional dropdowns based on location

Save profile to database

Filter and view matching profiles

Toggle between form and filter view

# WorkFlow 
1.User will save profile for what he is looking for then he can go on filter and search from there or from save profile after clicking on search he will be redirect to filter the profiles accordingly.

#🐳 Docker Setup
✅ Prerequisites
Docker and Docker Compose installed

# Build and Run
From the root directory (Profile-Matcher/), run:

docker-compose up --build
This will:

Start a MySQL container and initialize it with setup.sql

Build and run the backend on port 5000

Build and run the frontend on port 3000
#snaps of application 
<img width="1914" height="907" alt="profilematcher-filter shifting after saving profile" src="https://github.com/user-attachments/assets/6d3ed901-3c4d-4e62-94c4-c7b1b7eda0d8" />
<img width="1920" height="816" alt="filter_form" src="https://github.com/user-attachments/assets/67fb72c5-2654-4e5b-8d18-de314426247d" />
<img width="1553" height="860" alt="profileform1" src="https://github.com/user-attachments/assets/6a20e5f2-e09f-4bbd-8018-31405a4998bf" />
<img width="1553" height="860" alt="profileform1" src="https://github.com/user-attachments/assets/39ec09dc-7a98-4020-a77b-95b14fdeb96c" />




