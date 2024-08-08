const User = require('../models/user');

exports.registerUser = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        skills: req.body.skills
    });
    newUser.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send('User registered successfully');
        }
    });
};
