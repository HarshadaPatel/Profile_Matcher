const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO profiles SET ?', data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true, id: result.insertId });
  });
});

router.get('/filter', (req, res) => {
  const { gender, location, habits, education, caste } = req.query;

  console.log('Received query:', req.query);

  let sql = `SELECT * FROM profiles WHERE gender = ?`;
  const params = [gender];

  if (location) {
    sql += ` AND location_preference = ?`;
    params.push(location);
  }
  if (habits) {
    sql += ` AND habits_preference = ?`;
    params.push(habits);
  }
  if (education) {
    sql += ` AND education_preference IN (?)`;
    params.push(education.split(','));
  }
  if (caste) {
    sql += ` AND (caste_preference = 'No preference' OR caste_preference IN (?))`;
    params.push(caste.split(','));
  }

  sql += ` ORDER BY points DESC`;

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).send(err);
    }
    res.send(results);
  });
});


module.exports = router;
