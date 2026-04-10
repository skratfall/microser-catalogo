import { Document, Types } from 'mongoose';

export interface ProductDocument extends Document {
  _id: Types.ObjectId;
  name: string;
  price: number;
  description?: string;
}
