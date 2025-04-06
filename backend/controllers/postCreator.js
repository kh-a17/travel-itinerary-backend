const PostCreate = require('../models/PostCreate');

exports.postCreate = async (req, res) => {

    const {
        city_name,
        age,
        group,
        season,
        budget,
        accomodation,
        no_of_days,
        itinerary
    } = req.body;

    try {
        postCreate = new PostCreate({
            city_name,
            age,
            group,
            season,
            budget,
            accomodation,
            no_of_days,
            itinerary  // This is the array of day itinerary objects
        });

        // Save the itinerary to the database
        await postCreate.save();

        // Respond with a success message
        res.status(201).json({ message: 'Itinerary posted successfully' });

    } catch (err) {
        // Handle errors if something goes wrong
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getPostInfo = async (req, res) => {
    try {
        const filters = {};

        // Required filter
        if (req.query.city_name) {
            filters.city_name = req.query.city_name;
        } else {
            return res.status(400).json({ message: "City name is required." });
        }

        // Optional filters
        if (req.query.age) filters.age = req.query.age;
        if (req.query.group) filters.group = req.query.group;
        if (req.query.season) filters.season = req.query.season;
        if (req.query.budget) filters.budget = req.query.budget;

        const results = await PostCreate.find(filters);

        res.status(200).json(results);
    } catch (err) {
        console.error("❌ Error fetching itineraries:", err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
