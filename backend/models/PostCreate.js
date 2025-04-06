const mongoose = require('mongoose');

const placesVisitedSchema = new mongoose.Schema({
    place_visited: {
        type: String,
    },
    rating: {
        type: Number,
    }
});

const dayItinerarySchema = new mongoose.Schema({
    day_number: {
        type: Number,
        required: true,
    },
    places_visited_each_day: {
        type: [placesVisitedSchema], // Array of places
        required: true,
    },
    restaurants: {
        type: [String], // Array of restaurants
        required: true,
    },
    mode_of_transport: {
        type: String,
    },
});

const itinerarySchema = new mongoose.Schema({
    city_name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    season: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    accomodation: {
        type: String,
        required: true,
    },
    no_of_days: {
        type: Number,
        required: true,
    },
    itinerary: [dayItinerarySchema],
    restaurants: [],
    mode_of_transport: []
});

module.exports = mongoose.model('PostCreate', itinerarySchema);