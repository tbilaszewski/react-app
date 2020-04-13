import * as mongoose from 'mongoose';

export const EventDocumentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  date: String
});
