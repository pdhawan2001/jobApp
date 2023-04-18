const express = require('express');
const jobController = require('../controllers/jobController');

const router = express.Router();

router.post('/addJob', jobController.addJob);
router.get('/allJobs', jobController.allJobs);
router.delete('/deleteJob/:id', jobController.deleteJob);

module.exports = router;
