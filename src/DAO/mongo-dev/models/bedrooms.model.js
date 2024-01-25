import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number }
})

export const bedroomsModel = model('bedrooms', schema)
