const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    yearPublished: { type: Number, required: true },
    genres: { type: [String] },
    availableCopies: { type: Number, default: 5 }
});

module.exports = mongoose.model('Book', bookSchema);


