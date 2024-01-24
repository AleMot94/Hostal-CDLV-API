import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number }
})

export const productsModel = model('bedrooms', schema)
