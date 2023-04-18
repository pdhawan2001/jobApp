const { Job } = require('../models/jobModel');

const addJob = async (req, res) => {
  let info = {
    title: req.body.title,
    description: req.body.description,
    salary: req.body.salary,
    location: req.body.location,
    jobType: req.body.jobType,
  };
  // console.log(info);
  const job = await Job.create(info);
  res.status(200).send(job);
};

const allJobs = async (req, res) => {
  const jobs = await Job.findAll();
  // console.log(jobs[0]);
  res.status(200).json(jobs);
};

const deleteJob = async (req, res) => {
  await Job.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send('Job Deleted');
};

module.exports = { addJob, allJobs, deleteJob };
