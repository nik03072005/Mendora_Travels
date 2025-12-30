import Job from '../models/jobModel.js';
const createJob = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error('Please provide title and content');
  }

  const job = await Job.create({
    title,
    content,
  });

  res.status(201).json({
    success: true,
    data: job,
  });
};

const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json({
    success: true,
    data: jobs,
  });
};

const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  await Job.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: 'Job deleted successfully',
  });
};


export { createJob,deleteJob,getJobs };