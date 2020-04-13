import { Document } from 'mongoose';

export interface EventDocument extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly date: string;
}