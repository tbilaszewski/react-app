const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventDocumentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: String
});

const EventDocument = mongoose.model('EventDocument', EventDocumentSchema);

module.exports =  EventDocument;