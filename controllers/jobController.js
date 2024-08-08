const Job = require('../models/job');

exports.createJob = (req, res) => {
    const newJob = new Job({
        title: req.body.title,
        description: req.body.description,
        postedBy: req.body.postedBy
    });
    newJob.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('Job posted successfully');
        }
    });
};

exports.getJobs = (req, res) => {
    Job.find({}, (err, jobs) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(jobs);
        }
    });
};
