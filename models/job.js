const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    postedBy: String
});

module.exports = mongoose.model('Job', jobSchema);
